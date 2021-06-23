import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            text: props.expense ? props.expense.text : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            editForm: props.editForm
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) { this.setState(() => ({ createdAt })); }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p className='font-italic text-danger'>{this.state.error}</p>}
                <div className='d-flex flex-column form'>
                    <div className='d-flex flex-wrap col-12'>
                        <input
                            className='basic-input w-100 px-3'
                            type='text'
                            placeholder='Decription'
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}>
                        </input>
                    </div>
                    <div className='d-flex flex-sm-column flex-xl-row justify-content-between col-12'>
                        <div /* className='col-sm-12 col-xl-6' */ className='flex-fill mr-xl-2 mb-sm-2 mb-xl-0'>
                            <input
                                className='basic-input w-100 px-3'
                                type='text'
                                value={this.state.amount}
                                placeholder='Amount'
                                onChange={this.onAmountChange}>
                            </input>
                        </div>
                        <div className='date-container' className='flex-fill ml-xl-2 mt-sm-2 mt-xl-0'/* col-sm-12 col-xl-6' */>
                            <SingleDatePicker
                                date={this.state.createdAt} // momentPropTypes.momentObj or null
                                onDateChange={this.onDateChange} // PropTypes.func.isRequired
                                focused={this.state.calendarFocused} // PropTypes.bool
                                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                                numberOfMonths={1}
                                isOutsideRange={(day) => false}
                            // id="your_unique_id" // PropTypes.string.isRequired,
                            />
                        </div>
                    </div>
                    <div className='d-flex col-12'>
                        <textarea
                            className='basic-textarea w-100 px-3'
                            type='text'
                            placeholder='Add a description for this expense (optional)'
                            value={this.state.note}
                            onChange={this.onNoteChange}>
                        </textarea>
                    </div>
                    <div className='mb-0 px-3 col-xl-3 col-sm-12'>
                        <button className='btn btn-primary w-100'>
                            {this.state.editForm ? 'Save Expense' : 'Add Expense'}
                        </button>
                    </div>
                </div>

            </form>
        )
    }
}