import React from "react";
import { connect } from "react-redux"; /* -> connect connette il nostro componente allo store */
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((el) => <ExpenseListItem key={el.id} {...el} />)
    )}
  </div>
);

//connect() -> funzione restituisce un HOC e poi invochiamo subito il suo risultato e gli passiamo (ExpenseList)
/* Dentro connect c'è una callback in cui gli passiamo lo state come paramentro. La callback serve per dire al connettore quali informazioni
ci servono e vogliamo fornire al nostro componente (siccome non abbiamo bisogno di tutti i dati presenti nello store).
Nel componente poi richiamiamo le informazione returned dal connettore tramite le props. La callback poi è stata presa e l'abbiamo incollata
creando la variabile mapStateToProp */

const mapStateToProp = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};
export default /*const ConnectedExpenseList = */ connect(mapStateToProp)(
  ExpenseList
);
