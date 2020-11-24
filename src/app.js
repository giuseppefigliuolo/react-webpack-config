import React from "react";
import ReactDOM from "react-dom";
//React Redux -> Provider ci permette di fornine i dati dello store a tutti i componenti (nei componenti servirà importare {connect})
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 700 }));
store.dispatch(
  addExpense({ description: "Gas bill", amount: 10000, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "Mouse bill", amount: 10000 }));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
