import React, { useState } from "react";
import TransactionRow from "./TransactionRow";

const TransactionsTable = (props) => {
  const [custId, setCusId] = useState(props.store.getCustomersIds()[0]);
  const [totalPrice, setPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [ccType, setCcType] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  return (
    <div className="row">
      <div className="h3 m-3">Transactions</div>
      <hr />
      <div class="row ms-3 justify-content-start">
        {props.store.transactions.map((trans, index) => (
          <TransactionRow item={`index${index}`} row={trans} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsTable;
