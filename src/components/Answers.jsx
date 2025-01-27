import { useState } from "react";

export default function Answers({ text, correct }) {
  const [iscorrect, setIscorrect] = useState(null);
  return (
    <p
      onClick={() => {
        if (correct) {
          setIscorrect(true);
        } else {
          setIscorrect(false);
        }
      }}
      className={` py-2 w-[30rem] cursor-pointer px-5 bg-gray-50 rounded-full  drop-shadow-sm ${
        iscorrect && "bg-green-400"
      } ${iscorrect === false && "bg-red-400 text-white"}  ${
        iscorrect === null && "hover:bg-gray-500 hover:text-white"
      }`}
    >
      {text}
    </p>
  );
}
