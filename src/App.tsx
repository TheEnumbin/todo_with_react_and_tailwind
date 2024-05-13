import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  var newItemString;
  const addItem = (item: string) => {
    newItemString = item;
  };
  return (
    <div className="to-do-wrapper bg-white">
      <Header handleAdd={addItem}></Header>
      <Table newItem="hello"></Table>
    </div>
  );
}

export default App;
