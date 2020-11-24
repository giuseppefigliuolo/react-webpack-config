import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../../actions/filters";

// SET_START_DATE
test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

// SET_END_DATE
test("should generate set start date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

// SORT_BY_AMOUNT
test("should sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

// SORT_BY_DATE
test("should sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

// SORT_BY_TEXT
test("should sort by text", () => {
  const action = setTextFilter("ciao");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "ciao",
  });
});

test("should sort by text", () => {
  const action = setTextFilter("");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
