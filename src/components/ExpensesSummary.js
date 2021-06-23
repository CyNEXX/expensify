import React from 'react';
import numeral from 'numeral';
import selectAllExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ count, total }) => {
    return (
        <div className='bg-light py-4'>
            <div className='content-container py-2 w-100'>
                <div className='d-flex flex-sm-row flex-xl-column justify-content-between h-100'>
                    <div className='col-auto py-xl-0 py-sm-1 h-100'>
                        {
                            count == 0 ?
                                <h2 className='font-weight-light p-0 h-100'>No expenses within range</h2> :
                                <div>
                                    <div className='d-sm-none d-xl-block'>
                                        <h2 className='font-weight-light p-0 h-100'>Viewing <span className='font-weight-bold'>{count}</span> {count !== 1 ? 'expenses' : 'expense'} totalling <span className='font-weight-bold'>{numeral(total).format('$0,0.00')}</span></h2>
                                    </div>
                                    <div className='d-sm-flex d-xl-none flex-column'>
                                        <div>
                                            <span className='font-weight-bold h2'>{count}</span><span className='h2'> {count !== 1 ? 'expenses' : 'expense'} </span>
                                        </div>
                                        <h1 className='font-weight-bold pt-2'>{numeral(total).format('$0,0.00')}</h1>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className='col-3 d-flex'>
                        <Link className='btn btn-primary mt-sm-0 mt-xl-3 bigbutton w-100 h-100 px-0 d-flex justify-content-center align-content-center' to='/create'><h2 className='m-auto'>Add Expense</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        count: expenses.length,
        total: selectAllExpenses(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);

