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
    this.transactions = [
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
        total_price: "1329.12",
        currency: "NIO",
        cerdit_card_type: "mastercard",
        cerdit_card_number: "5010126046192324",
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
        total_price: "4257.95",
        currency: "IDR",
        cerdit_card_type: "visa-electron",
        cerdit_card_number: "4508672811329403",
      },
    ];
  }
  getCustomersIds = () => this.customers.map(({ customer_id: id }) => id);
  getCustomerDetailsById = (id) => {
    const cus = this.customers.find((cust) => cust.customer_id === id);
    if (cus) {
      return {
        firstName: cus.first_name,
        lastName: cus.last_name,
        email: cus.email,
      };
    }
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  };

  fetchAllTransactions = async () => {
    let result = [];
    try {
      result = await axios.get("http://localhost:8080/transactions");
      this.transactions = result;
    } catch (error) {
      result = [];
    }
    return result;
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
      await axios.post("http://localhost:8080/add-transaction", body);
    } catch (error) {
      console.log("error creating a transaction", error);
    }
  };
}
