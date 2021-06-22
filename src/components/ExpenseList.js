import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


/* export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='d-flex justify-content-between bg-light basic-input border'>
            <div className='pl-3 my-auto d-none d-md-block d-lg-none'>Expenses</div>
            <div className='pl-3 my-auto d-md-none d-lg-block'>Expense</div>
            <div className='pr-3 my-auto d-md-none d-lg-block'>Amount</div>
        </div>
        {
            props.expenses.length === 0 ? (<p>No expense</p>) : (
                <table className='content-container w-100 table'>
                    <thead>
                        <tr scope='row' className='d-flex justify-content-between px-3'>
                            <th scope='col' className='my-auto d-none d-md-block d-lg-none'>Expenses</th>
                            <th scope='col' className='my-auto d-md-none d-lg-block'>Expense</th>
                            <th scope='col' className='my-auto d-md-none d-lg-block'>Amount</th>
                        </tr>
                    </thead>
                    {props.expenses.map((expense, i) => {
                        return <ExpenseListItem
                            key={expense.id}
                            count={i + 1}
                            {...expense} />
                    })}
                </table>
            )
        }

    </div>
) */

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='d-flex justify-content-between bg-dark basic-input border text-light'>
            <div className='pl-3 my-auto d-none d-md-block d-lg-none'>Expenses</div>
            <div className='pl-3 my-auto d-md-none d-lg-block'>Expense</div>
            <div className='pr-3 my-auto d-md-none d-lg-block'>Amount</div>
        </div>
        <div className='fieldarray mb-5'>
            {
                props.expenses.length === 0 ? (
                    <div className='content-container d-flex justify-content-center py-3 font-italic text-muted'>
                        <h5>No expense</h5>
                    </div>) : (
                    props.expenses.map((expense, i) => {
                        return <ExpenseListItem
                            key={expense.id}
                            count={i + 1}
                            {...expense} />
                    })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);