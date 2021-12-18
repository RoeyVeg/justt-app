import React from "react";

const TransactionRow = (props) => {
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
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            // data-bs-target={`#${props.item}`}
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
      <div
        className="collapse"
        id="collapseExample"
        //   id={props.item}
      >
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  );
};

export default TransactionRow;
