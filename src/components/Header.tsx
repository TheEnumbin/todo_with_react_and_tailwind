import {
  TotalItems,
  DoneItems,
  Undone,
  CreateComponent,
} from "./partial/HeaderParts";

interface HeaderProps {
  number_of_tasks: number;
  handleAdd: (item: string) => void;
}

const Header = ({ number_of_tasks, handleAdd }: HeaderProps) => {
  return (
    <div>
      <div className="text-black flex flex-row gap-3 items-center justify-between">
        <TotalItems tItems={number_of_tasks}></TotalItems>
        <DoneItems dItems={0}></DoneItems>
        <Undone undone={0}></Undone>
      </div>
      <CreateComponent onClickAdd={handleAdd}></CreateComponent>
    </div>
  );
};

export default Header;
