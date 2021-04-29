import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const result = expensesTotal([]);
    expect(result).toBe(0);
});

test('Should return 114195 if a single expense gets sent', () => {
    const result = expensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('Should return 114195 if expenses are sent', () => {
    const result = expensesTotal(expenses);
    expect(result).toBe(114195);
});

