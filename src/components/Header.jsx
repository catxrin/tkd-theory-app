import Dropdown from "./Dropdown";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="sticky z-50 font-semibold text-gray-700 font-mono hidden w-screen items-center justify-between bg-white px-3 py-2 shadow-md sm:flex">
      <Logo />
      <div className="flex flex-row gap-5">
        <p>Терминология</p>
        <p>Изисквания</p>
        <p>Книжа</p>
        <Dropdown />
      </div>
    </div>
  );
}
