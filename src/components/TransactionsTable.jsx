import React, { useState } from "react";

const TransactionsTable = (props) => {
  const [custId, setCusId] = useState(props.store.getCustomersIds()[0]);
  const [totalPrice, setPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [ccType, setCcType] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  return (
    <div className="row">
      <div className="h3 m-3">Transaction</div>
      <hr />
    </div>
  );
};

export default TransactionsTable;
