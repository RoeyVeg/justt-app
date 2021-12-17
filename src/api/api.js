import axios from "axios";

export default class Api {
  fetchAllTransactions = async () => {
    let result = [];
    try {
      result = await axios.get("/getAllTransactions");
    } catch (error) {
      result = [];
    }
    return result;
  };
  createNewTransaction = (params) => {};
  deleteTransaction = (customerId) => {};
}
