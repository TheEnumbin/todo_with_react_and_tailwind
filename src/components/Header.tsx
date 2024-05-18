import {
  TotalItems,
  DoneItems,
  Undone,
  CreateComponent,
} from "./partial/HeaderParts";

interface HeaderProps {
  number_of_tasks: number;
  done_count: number;
  undone: number;
  handleAdd: (item: string) => void;
}

const Header = ({
  number_of_tasks,
  done_count,
  undone,
  handleAdd,
}: HeaderProps) => {
  return (
    <div>
      <div className="text-black flex flex-row gap-3 items-center justify-between">
        <TotalItems tItems={number_of_tasks}></TotalItems>
        <DoneItems dItems={done_count}></DoneItems>
        <Undone undone={undone}></Undone>
      </div>
      <CreateComponent onClickAdd={handleAdd}></CreateComponent>
    </div>
  );
};

export default Header;
