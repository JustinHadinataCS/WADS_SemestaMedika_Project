import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <div className=" text-white h-screen bg-[#1D3B5C] py-10 px-8 flex-col flex gap-y-10 w-2xs shrink-0">
      <Logo />
      <MainNav />
    </div>
  );
}

export default Sidebar;
