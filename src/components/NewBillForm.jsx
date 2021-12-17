import React, { useState } from "react";

const NewBillForm = (props) => {
  const [custId, setCusId] = useState(props.store.getCustomersIds()[0]);
  return (
    <div className="row">
      <div className="h3 m-3">Enter a new transaction</div>
      <hr />
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <label for="selectCustomer" className="form-label">
            Customer Id
          </label>
          <select
            id="selectCustomer"
            className="form-select"
            onChange={(e) => setCusId(e.target.value)}
          >
            {props.store.getCustomersIds().map((id) => (
              <option value={id}>{`${id}`}</option>
            ))}
          </select>
        </div>
      </div>
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <input
            type="text"
            className="form-control disabled readonly"
            id="firstName"
            value={props.store.getCustomerDetailsById(custId).firstName}
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            className="form-control disabled readonly"
            id="lastName"
            value={props.store.getCustomerDetailsById(custId).lastName}
          />
        </div>
        <div class="col-4">
          <input
            type="email"
            className="form-control disabled readonly"
            id="email"
            value={props.store.getCustomerDetailsById(custId).email}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default NewBillForm;
