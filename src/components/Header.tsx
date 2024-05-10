import { TotalItems, DoneItems, Undone } from "./partial/HeaderParts";
const Header = () => {
  return (
    <div className="text-black flex flex-row gap-3 items-center justify-between">
      <TotalItems></TotalItems>
      <DoneItems></DoneItems>
      <Undone></Undone>
    </div>
  );
};

export default Header;
