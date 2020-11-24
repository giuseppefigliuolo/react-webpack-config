// Expenses Reducer
const expensesReducerDefaultState = [];

//esportiamo la costante come default (possiamao perchè è una pure function)
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      /* Spread operator e non push per l-array state perch[ così non lo modifichiamo (state non va mai toccato direttamente) */
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((el) => {
        if (el.id === action.id) {
          return {
            ...el,
            ...action.updates,
          };
        } else {
          return el;
        }
      });

    default:
      return state;
  }
};
