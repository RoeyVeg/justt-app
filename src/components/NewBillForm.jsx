import React, { useState } from "react";

const NewBillForm = (props) => {
  const [custId, setCusId] = useState(props.store.getCustomersIds()[0]);
  const [totalPrice, setPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [ccType, setCcType] = useState("");
  const [ccNumber, setCcNumber] = useState("");
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
            className="form-control disabled"
            id="firstName"
            value={props.store.getCustomerDetailsById(custId).firstName}
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            className="form-control disabled"
            id="lastName"
            value={props.store.getCustomerDetailsById(custId).lastName}
          />
        </div>
        <div class="col-4">
          <input
            type="email"
            className="form-control disabled"
            id="email"
            value={props.store.getCustomerDetailsById(custId).email}
          />
        </div>
      </div>
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <label for="totalPrice" className="form-label">
            Price
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            id="totalPrice"
            value={totalPrice}
          />
        </div>
        <div class="col-4">
          <label for="currency" className="form-label">
            Currecncy
          </label>
          <input
            onChange={(e) => setCurrency(e.target.value)}
            type="text"
            className="form-control"
            id="currency"
            value={currency}
          />
        </div>
      </div>
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <label for="ccType" className="form-label">
            Credit Card Type
          </label>
          <input
            onChange={(e) => setCcType(e.target.value)}
            type="text"
            className="form-control"
            id="ccType"
            value={ccType}
          />
        </div>
        <div class="col-4">
          <label for="ccNumber" className="form-label">
            Credit Card Number
          </label>
          <input
            onChange={(e) => setCcNumber(e.target.value)}
            type="text"
            className="form-control"
            id="ccNumber"
            value={ccNumber}
          />
        </div>
      </div>
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              console.log({ ccNumber });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBillForm;
