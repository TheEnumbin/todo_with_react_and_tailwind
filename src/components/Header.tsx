import {
  TotalItems,
  DoneItems,
  Undone,
  CreateComponent,
} from "./partial/HeaderParts";

interface HeaderProps {
  handleAdd: (item: string) => void;
}

const Header = ({ handleAdd }: HeaderProps) => {
  return (
    <div>
      <div className="text-black flex flex-row gap-3 items-center justify-between">
        <TotalItems></TotalItems>
        <DoneItems></DoneItems>
        <Undone></Undone>
      </div>
      <CreateComponent onClickAdd={handleAdd}></CreateComponent>
    </div>
  );
};

export default Header;
