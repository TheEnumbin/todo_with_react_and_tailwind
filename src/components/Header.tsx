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
  // Prop drilling from First Child "Header" to Deeper Children with the Props
  return (
    <div>
      <div className="text-black flex flex-row gap-3 items-center justify-between">
        <TotalItems number_of_tasks={number_of_tasks}></TotalItems>
        <DoneItems done_count={done_count}></DoneItems>
        <Undone undone={undone}></Undone>
      </div>

      <CreateComponent handleAdd={handleAdd}></CreateComponent>
    </div>
  );
};

export default Header;
