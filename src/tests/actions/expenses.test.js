import { addExpense, startAddExpense, editExpense, startEditExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import { create } from 'react-test-renderer';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should remove expense from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startRemoveExpense(expenses[0])).then(() => {
        const actions = store.getActions();
        const id = expenses[0].id;
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'from Stefan' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'from Stefan'
        }
    });
});

test('Should update an expense in firebase', (done) => {
    const newExpenseData = {
        description: 'gummy',
        amount: 150
    };
    const store = createMockStore({});
    store.dispatch(startEditExpense(expenses[0].id, newExpenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[0].id,
            updates: {
                description: 'gummy',
                amount: 150
            }
        });
        return database.ref(`expenses/${expenses[0].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe('gummy');
        done();
    });
});

test('Should setup add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Shoud add expense to database store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshpt) => {
        expect(snapshpt.val()).toEqual(expenseData);
        done();
    });
});

test('Shoud add expense with defaults to database store', (done) => {
    const store = createMockStore({});
    const expenseDefaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaultData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshpt) => {
        expect(snapshpt.val()).toEqual(expenseDefaultData);
        done();
    });
});

test('Should setup set expense action obj', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});



/* test('Should setup add expense action obj with defaults', () => {
    const expenseTest = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseTest,
            id: expect.any(String),
        }
    });
}); */