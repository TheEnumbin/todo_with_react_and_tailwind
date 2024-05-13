import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  const addItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="to-do-wrapper bg-white">
      <Header handleAdd={addItem}></Header>
      <Table></Table>
    </div>
  );
}

export default App;
