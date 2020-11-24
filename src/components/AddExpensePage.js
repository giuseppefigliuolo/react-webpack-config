import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };
  render() {
    <div>
      <h1>Add expense</h1>
      <ExpenseForm onSubmit={this.onSubmit} />
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

/* 
PER POTER TESTARE ABBIAMO FATTO ALCUNE MODICHE AL DISPATCH EVENT, CHE LO FARÀ DIRETTAMENTE IL CONNECT.
ECCO IL VECCHIO CODICE:

const AddExpensePage = (props) => (
  <div>
    <h1>Add expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        // una volta submittato reindirizziamo l'utente ad un'altra pagina
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage); */
