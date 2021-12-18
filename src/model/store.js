import axios from "axios";
export default class Store {
  constructor() {
    this.customers = [
      {
        customer_id: "813-86-3131",
        first_name: "Benedikt",
        last_name: "Abberley",
        email: "babberley0@artisteer.com",
        gender: "Male",
        country: "Nicaragua",
        city: "San Jorge",
        street: "415 Green Lane",
        phone: "887-564-6105",
      },
      {
        customer_id: "387-63-2772",
        first_name: "Ellwood",
        last_name: "Speirs",
        email: "espeirs1@mediafire.com",
        gender: "Male",
        country: "Indonesia",
        city: "Kiarajangkung",
        street: "4368 Sloan Trail",
        phone: "660-819-9883",
      },
    ];
    this.transactions = [];
  }
  getCustomersIds = () => this.transactions.map(({ customer_id: id }) => id);
  getCustomerDetailsById = (id) => {
    const cus = this.transactions.find((cust) => cust.customer_id === id);
    console.log({ id, cus, tran: this.transactions });
    if (cus) {
      return cus;
    }
    return {};
  };

  fetchAllTransactions = async () => {
    let result = [];
    try {
      result = await axios.get("http://localhost:8080/transactions");
      this.transactions = (result || {}).data;
      console.log({ tr: this.transactions });
    } catch (error) {
      result = [];
    }
    return result;
  };
  deleteTransaction = async (id) => {
    console.log({ id });
    try {
      await axios.delete(`http://localhost:8080/transactions/${id}`);
    } catch (error) {
      console.log("error deleting a transaction", error);
    }
  };
  addNewTransaction = async (
    custId,
    firstName,
    lastName,
    email,
    totalPrice,
    currency,
    ccType,
    ccNumber
  ) => {
    const body = {
      custId,
      firstName,
      lastName,
      email,
      totalPrice,
      currency,
      ccType,
      ccNumber,
    };
    try {
      await axios.post("http://localhost:8080/transactions", body);
    } catch (error) {
      console.log("error creating a transaction", error);
    }
  };
}
