import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
}



const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return [...state, action.expense];
        }
        case 'REMOVE_EXPENSE': {
            return state.filter((expense) => expense.id !== action.id);
        }
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        }
        default:
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...state,
                text: action.text
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...state,
                sortBy: 'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state,
                sortBy: 'date'
            }
        }
        case 'SET_START_DATE': {
            return {
                ...state,
                startDate: action.startDate
            }
        }
        case 'SET_END_DATE': {
            return {
                ...state,
                endDate: action.endDate
            }
        }
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.trim().toLowerCase().includes(text.trim().toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expenseA, expenseB) => {
        if (sortBy === 'date') {
            return expenseA.createdAt < expenseB.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return expenseA.amount < expenseB.amount ? 1 : -1;
        }
    });
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('STATE: ', state);
    console.log(visibleExpenses);
});



const expenseOne = store.dispatch(addExpense({ description: 'New Payment', amount: 1500, createdAt: -25000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 30000, createdAt: -1000 }));
/* store.dispatch(removeExpense({ id: expenseOne.expense.id })); */

/* store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 })); */
store.dispatch(setTextFilter(''));
/*store.dispatch(setTextFilter('')); */
/* store.dispatch(setStartDate()); */
/* store.dispatch(setStartDate(0)); */
store.dispatch(setEndDate(5000));
/* store.dispatch(setEndDate(1250)); */
/* store.dispatch(sortByDate()); */

/* store.dispatch(sortByAmount());
 */
const demoState = {
    expenses: [
        {
            id: 'sadfsdf',
            description: 'Jan Rent',
            note: 'Rent payment',
            amount: 80000,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    }
};