import React, { useReducer, createContext } from "react";
import contextReducer from "./ContextReducer";
const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const balance = transactions.reduce((acc, curr) => {
    return curr.type === "Expense" ? acc - curr.amount : acc + curr.amount;
  }, 0);
  return (
    <ExpenseTrackerContext.Provider
      value={{ addTransaction, deleteTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
