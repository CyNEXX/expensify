import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (<p>No expense</p>) : (
                props.expenses.map((expense, i) => {
                    return <ExpenseListItem
                        key={expense.id}
                        count={i + 1}
                        {...expense} />
                })
            )}

    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);