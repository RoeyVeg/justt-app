import React from "react";

const NewBillForm = () => {
  return (
    <div className="row">
      <div className="h3 m-3">Enter a new transaction</div>
      <hr />
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <label for="selectCustomer" className="form-label">
            Customer
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row m-3 justify-content-start">
        <div class="col-4">
          <input
            type="text"
            className="form-control"
            id="firstName"
            value="Roey"
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
