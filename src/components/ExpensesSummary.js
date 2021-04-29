import React from 'react';
import numeral from 'numeral';
import selectAllExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';

export const ExpensesSummary = ({ count, total }) => {
    return (<div>
        {count == 0 ?
            <p>No expenses within range</p> :
            <p>Viewing {count} {count !== 1 ? 'expenses' : 'expense'} totalling {numeral(total).format('$0,0.00')}</p>}
    </div>);
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        count: expenses.length,
        total: selectAllExpenses(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);

