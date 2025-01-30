import { useEffect, useRef, useState } from "react";
import kyus from "../data/kyus.json";

import Belts from "./Belts";
import Icon from "./Icon";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div ref={divRef} className="relative">
      <div className="flex flex-row gap-2">
        <p className="font-semibold text-gray-700 font-mono">Степен</p>
        <Icon
          action={() => setOpen(!open)}
          icon={`${open ? "keyboard_arrow_up" : "keyboard_arrow_down"}`}
        />
      </div>
      {open && (
        <div className="fixed right-0 top-10 font-mono">
          <div className="flex flex-col gap-1 min-w-36 text-center shadow-md rounded bg-white border-[1px] border-gray-200">
            {kyus.map((kyu) => (
              <Belts
                key={kyu.kyu}
                kyu={kyu.kyu}
                mainColor={kyu.color[0]}
                secondaryColor={kyu?.color[1]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
