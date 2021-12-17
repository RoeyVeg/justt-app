import React from "react";

const TransactionRow = ({ row }) => {
  return (
    <>
      <div className="row p-3 border justify-content-start">
        <div className="mb-3">{JSON.stringify(row)}</div>
        <div class="col-4">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${row.transaction_id}`}
          >
            Edit
          </button>
        </div>
        <div class="col-4">
          <button class="btn btn-primary" type="button">
            Delete
          </button>
        </div>
      </div>
      <div class="collapse" id={`${row.transaction_id}`}>
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </>
  );
};

export default TransactionRow;
