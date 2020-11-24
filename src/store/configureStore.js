import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
  //Store creation
  const store = createStore(
    combineReducers({
      /* A combineReducers si passano come chiave il nome del "root state" cioè la base degli state che si vuole tenere sott'occhio. 
        Poi come valore scriviamo il reducer che deve occuparsi di questa state root*/
      expenses: expensesReducer,
      filters: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  // quando importeremo questa funzione quest'ultima ritorerà store, quindi sarà possibile usarla
  return store;
};
