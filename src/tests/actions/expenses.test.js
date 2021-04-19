import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
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

test('Should setup add expense action object', () => {
    const expenseData = {
        description: 'New Test Rent',
        amount: '12500',
        createdAt: 1000,
        note: 'This is test data'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action obj with defaults', () => {
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
});