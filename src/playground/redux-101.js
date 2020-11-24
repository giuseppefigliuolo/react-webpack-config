import { createStore } from "redux";

// Action generators
/* abbiamo destrutturato incrementBy dall'oggetto che viene passato alla funzione,
  Inoltre gli abbiamo dato un valore di default di 1 in caso non venga passato */

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

/* Ecco un REDUCER ->  describes how application's state changes in response
    1. Reducers are pure functions ->
      l'output della funzione è definito solo dall'input, infatti non riceve e non cambia valori fuori dallo scope della funzione ma solo da cosa gli passiamo come parametro
    
    2. Never change state or action -> Mai cambiare direttamente il valore di state ma al contrario cambiarne o creare sue proprietà come state.count
       Per poi modificarle.
*/
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// here is how to watch for changes. Ogni volta che lo state cambia si triggera questa funziona
store.subscribe(() => {
  console.log(store.getState());
});

// getState è un metodo di redux per avere info sullo store creato
// console.log(store.getState());

// dispatch ci fa mandare l'azione
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(setCount({ count: 99 }));
