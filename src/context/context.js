import React, { useReducer, createContext } from "react";
import contextReducer from "./ContextReducer";
const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 1500,
    category: "Shopping",
    type: "Expense",
    date: "2022-06-11",
    id: "601c0eeb-e671-4703-a792-5bbb7261ceeb",
  },
  {
    amount: 5000,
    category: "Salary",
    type: "Income",
    date: "2022-06-11",
    id: "d0c9bcca-603e-4bcd-a509-7a16f5a55055",
  },
];
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
