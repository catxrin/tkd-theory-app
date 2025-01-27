import { useState } from "react";
import Icon from "./Icon";
import questions from "../data/questions.json";
import data10 from "../data/data10.json";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky z-50 hidden w-screen items-center justify-between bg-white px-3 py-2 shadow-md sm:flex">
      <p className="font-bold font-mono">TKD</p>
      <div className="relative">
        <div className="flex flex-row gap-2">
          <p className="font-semibold text-gray-700 font-mono">Степен</p>
          {!open && (
            <Icon action={() => setOpen(true)} icon="keyboard_arrow_down" />
          )}
          {open && (
            <Icon action={() => setOpen(false)} icon="keyboard_arrow_up" />
          )}
        </div>
        {open && (
          <div className="fixed right-0 top-10 font-mono">
            <div className="flex text-white flex-col gap-2 min-w-36 text-center shadow-2xl rounded bg-white">
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 10);
                  localStorage.setItem("questions", JSON.stringify(data10));
                }}
                className="font-semibold drop-shadow-sm bg-white text-black cursor-pointer hover:shadow-sm"
              >
                10 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 9);
                }}
                className="bg-gradient-to-r drop-shadow-sm from-white to-yellow-500/80 font-semibold cursor-pointer hover:shadow-sm"
              >
                9 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 8);
                  localStorage.setItem("questions", JSON.stringify(questions));
                }}
                className="bg-yellow-500/80 drop-shadow-sm font-semibold cursor-pointer hover:shadow-sm"
              >
                8 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 7);
                }}
                className="bg-gradient-to-r drop-shadow-sm from-yellow-500/80 to-green-500/80 font-semibold cursor-pointer hover:shadow-sm"
              >
                7 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 6);
                }}
                className="bg-green-500/80 drop-shadow-sm font-semibold cursor-pointer hover:shadow-sm"
              >
                6 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 5);
                }}
                className=""
              >
                5 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 4);
                }}
                className="bg-blue-500/80 drop-shadow-sm font-semibold cursor-pointer hover:shadow-sm"
              >
                4 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 3);
                }}
                className="bg-gradient-to-r drop-shadow-sm from-blue-500/80 to-red-600/80 font-semibold cursor-pointer hover:shadow-sm"
              >
                3 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 2);
                }}
                className="bg-red-600/80 drop-shadow-sm font-semibold cursor-pointer hover:shadow-sm"
              >
                2 гуп
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 1);
                }}
                className="bg-gradient-to-r drop-shadow-sm from-red-600/80 to-black/80 font-semibold cursor-pointer hover:shadow-sm"
              >
                1 гуп
              </p>

              <p
                onClick={() => {
                  localStorage.setItem("difficulty", 0);
                }}
                className="bg-black/80 drop-shadow-sm font-semibold text-white cursor-pointer hover:shadow-sm"
              >
                I дан
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
