import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should add new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '101',
            amount: 105,
            note: 'cnx',
            createdAt: 14500,
            description: 'some exp'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[3]).toEqual(action.expense);
    // or expect(state).toEqual([...expenses, expense]);
});

test('Should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should NOT remove if id is not found', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
    expect(state).toEqual(expenses);
});

test('Should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: 'abc test',
            amount: 8888
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toBe('abc test');
});

test('Should NOT edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'abc test',
            amount: 8888
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
