import { useState } from "react";

export default function Answers({ text, correct }) {
  const [iscorrect, setIscorrect] = useState(null);

  const style = () => {
    if (iscorrect) return "bg-green-500 text-white";
    if (iscorrect === false) return "bg-red-500 text-white";
    if (iscorrect === null) return "hover:bg-gray-600 hover:text-white";
  };
  return (
    <p
      onClick={() => (correct ? setIscorrect(true) : setIscorrect(false))}
      className={` py-2 w-[30rem] cursor-pointer px-5 bg-gray-50 rounded-md border-[1px] border-slate-300 drop-shadow-sm ${style()}`}
    >
      {text}
    </p>
  );
}
