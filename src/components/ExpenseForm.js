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
                    <input
                        className='basic-input px-3'
                        type='text'
                        placeholder='Decription'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}>
                    </input>
                    <div className='d-flex justify-content-between'>
                        <input
                            className='basic-input col-6'
                            type='text'
                            value={this.state.amount}
                            placeholder='Amount'
                            onChange={this.onAmountChange}>
                        </input>
                        <div className='date-container col-6 pr-0'>
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
                    <textarea
                        className='basic-textarea px-3 py-3'
                        type='text'
                        placeholder='Add a description for this expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <div className='mb-0'>
                        <button className='btn btn-primary'>
                            {this.state.editForm ? 'Save Expense' : 'Add Expense'}
                        </button>
                    </div>
                </div>

            </form>
        )
    }
}

/* <Container fluid>
                    <Row>
                        <Col lg={2}>
                            <input
                                className='basic-input w-100'
                                type='text'
                                placeholder='Decription'
                                autoFocus
                                value={this.state.description}
                                onChange={this.onDescriptionChange}>
                            </input>
                        </Col>
                        <Col lg={3}>
                            <input
                                className='basic-input'
                                type='text'
                                value={this.state.amount}
                                placeholder='Amount'
                                onChange={this.onAmountChange}>
                            </input></Col>
                        <Col lg={2}>
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={(day) => false}

                            /></Col>
                        <Col lg={3}>
                            <textarea
                                className='basic-textarea'
                                type='text'
                                placeholder='Add a description for this expense (optional)'
                                value={this.state.note}
                                onChange={this.onNoteChange}>
                            </textarea></Col>
                        <Col lg={2}>
                            <button>
                                {this.state.editForm ? 'Save Expense' : 'Add Expense'}
                            </button>
                        </Col>
                    </Row>
                </Container> */