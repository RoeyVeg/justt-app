import React, { useState } from "react";

const EditBillForm = (props) => {
  const [custId, setCusId] = useState(props.editedCustomerId);
  const [firstName, setFirstName] = useState(
    props.store.getCustomerDetailsById(props.editedCustomerId).first_name
  );
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [totalPrice, setPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [ccType, setCcType] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const submitForm = () => {
    props.store.addNewTransaction(
      custId,
      firstName,
      lastName,
      email,
      totalPrice,
      currency,
      ccType,
      ccNumber
    );
    setCusId("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPrice(0);
    setCurrency("");
    setCcType("");
    setCcNumber("");
  };
  return (
    <div className="row">
      <div className="h3 m-3">Edit transaction</div>
      <hr />
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <label for="customerId" className="form-label">
            Customer Id
          </label>
          <input
            type="text"
            className="form-control"
            disabled
            id="customerId"
            value={custId}
            onChange={(e) => setCusId(e.target.value)}
            // value={props.store.getCustomerDetailsById(custId).firstName}
          />
        </div>
      </div>
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <label for="firstName" className="form-label">
            Firts Name
          </label>
          <input
            type="text"
            className="form-control disabled"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            // value={props.store.getCustomerDetailsById(custId).firstName}
          />
        </div>
        <div class="col-4">
          <label for="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control disabled"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            // value={props.store.getCustomerDetailsById(custId).firstName}
          />
        </div>
        <div class="col-4">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control disabled"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              submitForm();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBillForm;
