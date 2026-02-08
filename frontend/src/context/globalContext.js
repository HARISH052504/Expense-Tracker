import React, { createContext, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // ---------------- INCOME ----------------

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-income`, income);
      getIncomes();
    } catch (err) {
      setError(err.response?.data?.message || "Error adding income");
    }
  };

  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-incomes`);
      setIncomes(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching incomes");
    }
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-income/${id}`);
      getIncomes();
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting income");
    }
  };

  // ---------------- EXPENSE ----------------

  const addExpense = async (expense) => {
    try {
      await axios.post(`${BASE_URL}/add-expense`, expense);
      getExpenses();
    } catch (err) {
      setError(err.response?.data?.message || "Error adding expense");
    }
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-expenses`);
      setExpenses(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching expenses");
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-expense/${id}`);
      getExpenses();
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting expense");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        incomes,
        addExpense,
        getExpenses,
        deleteExpense,
        expenses,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
