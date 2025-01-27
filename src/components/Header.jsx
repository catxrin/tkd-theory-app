import { useState } from "react";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky z-50 hidden w-screen items-center justify-between bg-white px-3 py-2 shadow-md sm:flex">
      <p className="font-bold font-mono">TKD</p>
      <div className="relative">
        {!open && (
          <Icon action={() => setOpen(true)} icon="keyboard_arrow_down" />
        )}
        {open && (
          <Icon action={() => setOpen(false)} icon="keyboard_arrow_up" />
        )}
        {open && (
          <div className="fixed right-0">
            <div className="flex flex-col gap-2 min-w-36 text-center shadow-2xl rounded bg-white">
              <p>10kyu</p>
              <p className="bg-gradient-to-r from-white to-yellow-500">9kyu</p>
              <p className="bg-yellow-500">8kyu</p>
              <p className="bg-gradient-to-r from-yellow-500 to-green-500 ">
                7kyu
              </p>
              <p className="bg-green-500">6kyu</p>
              <p className="bg-gradient-to-r from-green-500 to-blue-500">
                5kyu
              </p>
              <p className="bg-blue-500">4kyu</p>
              <p className="bg-gradient-to-r from-blue-500 to-red-500">3kyu</p>
              <p className="bg-red-500">2kyu</p>
              <p className="bg-gradient-to-r from-red-500 to-black">2kyu</p>
              <p className="bg-black">1kyu</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
