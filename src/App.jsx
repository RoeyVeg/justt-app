import React from "react";
import Title from "./components/Title";
import NewBillForm from "./components/NewBillForm";
import TransactionsTable from "./components/TransactionsTable";
import Store from "./model/store";
const App = () => {
  const store = new Store();
  return (
    <div className="container">
      <Title />
      <NewBillForm store={store} />
      <TransactionsTable store={store} />
    </div>
  );
};

export default App;
