import React, { useState, useEffect } from "react";
import TransactionRow from "./TransactionRow";
const TransactionsTable = (props) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    (async () => {
      const trans = await props.store.fetchAllTransactions();
      setTransactions(trans.data.trans);
    })();
  }, []);
  return (
    <div className="row">
      <div className="h3 m-3">Transactions</div>
      <hr />
      <div class="row ms-3 justify-content-start">
        {transactions.map((trans, index) => (
          <TransactionRow item={`index${index}`} row={trans} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsTable;
