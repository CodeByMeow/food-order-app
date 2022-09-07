import { createContext, useReducer } from "react";
import { EXPENSES } from "../constants/transactionTypes";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
  currentTransactionType: EXPENSES,
  totalSpent: 0,
};

export const GlobalState = createContext(initialState);

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalState.Provider value={[state, dispatch]}>
      {children}
    </GlobalState.Provider>
  );
};

export default TransactionProvider;
