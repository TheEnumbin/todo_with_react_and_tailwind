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
  const addHandler = (item) => {
    if (item != "") {
      handleAdd(item);
    }
  };
  return (
    <div>
      <div className="text-black flex flex-row gap-3 items-center justify-between">
        <TotalItems></TotalItems>
        <DoneItems></DoneItems>
        <Undone></Undone>
      </div>
      <CreateComponent onClickAdd={addHandler}></CreateComponent>
    </div>
  );
};

export default Header;
