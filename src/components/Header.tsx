import {
  TotalItems,
  DoneItems,
  Undone,
  CreateComponent,
  SearchComponent,
} from "./partial/HeaderParts";

interface HeaderProps {
  number_of_tasks: number;
  done_count: number;
  undone: number;
  handleAdd: (item: string) => void;
  runSearch: (item: string) => void;
}

const Header = ({
  number_of_tasks,
  done_count,
  undone,
  handleAdd,
  runSearch,
}: HeaderProps) => {
  // Prop drilling from First Child "Header" to Deeper Children with the Props
  return (
    <div className="flex flex-col">
      <div className="text-black flex flex-row gap-3 items-center justify-between">
        <TotalItems number_of_tasks={number_of_tasks}></TotalItems>
        <DoneItems done_count={done_count}></DoneItems>
        <Undone undone={undone}></Undone>
      </div>
      <div className="flex flex-row justify-between py-4 border-t-2">
        <SearchComponent runSearch={runSearch}></SearchComponent>
        <CreateComponent handleAdd={handleAdd}></CreateComponent>
      </div>
    </div>
  );
};

export default Header;
