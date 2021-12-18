import React, { useState } from "react";
import EditBillForm from "./EditBillForm";

const TransactionRow = (props) => {
  const [editedCustomerId, setEditedCustomerId] = useState("");
  return (
    <div>
      <div className="row p-3 border justify-content-start">
        <div className="mb-3">
          {Object.entries(props.row).map(([key, val]) => (
            <p>
              <strong>{key}:</strong>
              <span>{` ${val}`}</span>
            </p>
          ))}
        </div>
        <div className="col-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setEditedCustomerId(props.row.customer_id)}
          >
            Edit
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              props.store.deleteTransaction(props.row.customer_id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {editedCustomerId && <EditBillForm store={props.store} />}
    </div>
  );
};

export default TransactionRow;
