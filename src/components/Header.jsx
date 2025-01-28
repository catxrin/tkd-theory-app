import Dropdown from "./Dropdown";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="sticky z-50 hidden w-screen items-center justify-between bg-white px-3 py-2 shadow-md sm:flex">
      <Logo />
      <Dropdown />
    </div>
  );
}
