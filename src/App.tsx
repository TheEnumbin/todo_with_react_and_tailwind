import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="to-do-wrapper bg-white">
      <Header></Header>
      <Table></Table>
    </div>
  );
}

export default App;
