import React, { useState } from "react";

const EditBillForm = (props) => {
  const [custId, setCusId] = useState(props.transaction.customer_id);
  const [firstName, setFirstName] = useState(props.transaction.first_name);
  const [lastName, setLastName] = useState(props.transaction.last_name);
  const [email, setEmail] = useState(props.transaction.email);
  const [totalPrice, setPrice] = useState(props.transaction.total_price);
  const [currency, setCurrency] = useState(props.transaction.currency);
  const [ccType, setCcType] = useState(props.transaction.cerdit_card_type);
  const [ccNumber, setCcNumber] = useState(
    props.transaction.cerdit_card_number
  );
  const submitForm = () => {
    props.store.editTransaction(
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
    props.resetEditedId();
  };
  const cancelForm = () => {
    setCusId("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPrice(0);
    setCurrency("");
    setCcType("");
    setCcNumber("");
    props.resetEditedId();
  };
  return (
    <div className="row">
      <div className="h3 m-3">Edit transaction</div>
      <hr />
      <div className="row m-3 justify-content-start">
        <div className="col-4">
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
      <div className="row m-3 justify-content-start">
        <div className="col-4">
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
        <div className="col-4">
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
        <div className="col-4">
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
      <div className="row m-3 justify-content-start">
        <div className="col-4">
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
        <div className="col-4">
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
      <div className="row m-3 justify-content-start">
        <div className="col-4">
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
        <div className="col-4">
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
      <div className="row m-3 justify-content-start">
        <div className="col-4">
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
        <div className="col-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              cancelForm();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBillForm;
