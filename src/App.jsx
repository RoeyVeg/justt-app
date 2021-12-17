import React from "react";
import Title from "./components/Title";
import NewBillForm from "./components/NewBillForm";
const App = () => {
  return (
    <div className="container">
      <Title />
      <NewBillForm />
      <div className="row">Table</div>
    </div>
  );
};

export default App;
