import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div className='d-flex justify-content-between flex-column'>
        <ExpensesSummary />
        <div className='fieldgroup content-container flex-column w-100'>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    </div>
);

export default ExpenseDashboardPage;