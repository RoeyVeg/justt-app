import React from "react";
import Title from "./components/Title";
import NewBillForm from "./components/NewBillForm";
import Store from "./model/store";
const App = () => {
  const store = new Store();
  return (
    <div className="container">
      <Title />
      <NewBillForm store={store} />
      <div className="row">Table</div>
    </div>
  );
};

export default App;
