import moment from "moment";

// Filters reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      //ritorna l'oggetto filters ma in esso così facendo sovrascriviamo (tramite spread operator) il valore text all'interno dell'oggetto filters
      return { ...state, text: action.text };

    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };

    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };

    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };

    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};