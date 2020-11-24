import { TestScheduler } from "jest";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  // .tooEqual permette di comparare 2 oggetti o 2 array che con una comparazione normale '===' non sarebbero mai uguali
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should edit the object", () => {
  const action = editExpense("123abx", {
    note: "New Note value",
    description: "ciao",
    amount: "22",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abx",
    updates: { note: "New Note value", description: "ciao", amount: "22" },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      // siccome non possiamo sapere l'id, expect.any(string) -> controlliamo se dal test l'id sarà una stringa
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});
