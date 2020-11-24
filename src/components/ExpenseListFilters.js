import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
//per il dispatch ci servirà:
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  // siccome questa funzione sarà chiamata dentro dateRangePicker ci verrà fornito un oggetto contenente startDate, endDate
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (evt) => {
    // da qui dispatchiamo un evento e lo mandiamo allo store -> quello che digitiamo deve arrivare allo store e cambiare il valore filters
    // in questo caso this.props.dispatch equivale a store.dispatch(setTextFilter("bill")); come in app.js
    this.props.setTextFilter(evt.target.value);
  };
  onSortChange = (evt) => {
    if (evt.target.value === "amount") {
      this.props.sortByAmount();
    } else if (evt.target.value === "date") {
      this.props.sortByDate();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId="start"
          endDateId="end"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch) => ({
  setTextFIlter: (text) => dispatch(setTextFilter(text)),
  sortBy: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (start) => dispatch(setStartDate()),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

// Per questa sintassi guarda il componente: ExpenseList.js
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
