import React, { useState, useEffect } from "react";
import TransactionRow from "./TransactionRow";
const TransactionsTable = (props) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    (async () => {
      const trans = await props.store.fetchAllTransactions();
      setTransactions(trans.data);
    })();
  }, []);
  const refresh = async () => {
    const trans = await props.store.fetchAllTransactions();
    setTransactions(trans.data);
  };
  return (
    <div className="row">
      <div className="h3 m-3">Transactions</div>
      <div className="col-4">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => refresh()}
        >
          Refresh
        </button>
      </div>
      <hr />
      <div className="row ms-3 justify-content-start">
        {(transactions || []).map((trans, index) => (
          <TransactionRow
            item={`index${index}`}
            row={trans}
            store={props.store}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionsTable;
