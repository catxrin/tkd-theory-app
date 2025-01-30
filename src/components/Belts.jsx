import { useRecoilState } from "recoil";
import { kyuState } from "../store";

export default function Belts({ kyu, mainColor, secondaryColor = null }) {
  const [currentKyu, setCurrentKyu] = useRecoilState(kyuState);

  return (
    <div
      className="relative border-[1px] border-black/20 hover:shadow-sm cursor-pointer"
      onClick={() => setCurrentKyu(kyu)}
    >
      <div className={`h-5 w-full ${mainColor}`} />
      {secondaryColor && (
        <div
          className={`h-5 absolute top-0 right-2 w-2 shadow-sm border-[0.5px] border-black/20 ${secondaryColor}`}
        />
      )}

      <p
        className={`${
          kyu <= 8 && "text-white"
        } drop-shadow-sm text-sm absolute bottom-0 w-full`}
      >
        {kyu} гуп
      </p>
    </div>
  );
}
