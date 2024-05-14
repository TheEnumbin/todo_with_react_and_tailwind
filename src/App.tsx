import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  const [newItemString, passNewItemString] = useState("");
  const addItem = (item: string) => {
    passNewItemString(item);
  };
  return (
    <div className="to-do-wrapper bg-white">
      <Header handleAdd={addItem}></Header>
      <Table newItem={newItemString}></Table>
    </div>
  );
}

export default App;
