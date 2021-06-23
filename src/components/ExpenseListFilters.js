import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => { this.setState(() => ({ calendarFocused })); }

    ontTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        }
        else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }



    render() {
        return (
            <div className='col-12 d-flex content-container my-4 flex-wrap'>
                <div className='col-sm-12 col-xl-6 px-0'>
                    <input className='w-100 pl-3 basic-input'
                        placeholder='Search expense...'
                        type='text'
                        value={this.props.filters.text}
                        onChange={this.ontTextChange}>
                    </input>
                </div>
                <div className='col-sm-4 col-xl-2 px-xl-3 mt-sm-3 mt-xl-0 pl-sm-0'>
                    <select className='w-100 pl-3 basic-input'
                        value={this.props.filters.sortBy}
                        onChange={this.onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className='col-xl-4 col-sm-5 px-0 mt-sm-3 mt-xl-0 datepicker'>
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId='startD'
                        endDate={this.props.filters.endDate}
                        endDateId='endD'
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={(day) => {
                            return false;
                        }}
                    ></DateRangePicker>
                </div>
            </div>
        );
    }
}




const mapStatetoProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStatetoProps, mapDispatchToProps)(ExpenseListFilters);