import {
  TotalItems,
  DoneItems,
  Undone,
  CreateComponent,
} from "./partial/HeaderParts";
const Header = () => {
  return (
    <div>
      <div className="text-black flex flex-row gap-3 items-center justify-between">
        <TotalItems></TotalItems>
        <DoneItems></DoneItems>
        <Undone></Undone>
      </div>
      <CreateComponent></CreateComponent>
    </div>
  );
};

export default Header;
