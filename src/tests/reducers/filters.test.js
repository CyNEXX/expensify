import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set text filter', () => {
    const text = 'This is a test';
    const action = { type: 'SET_TEXT_FILTER', text }
    const state = filtersReducer(undefined, action);
    expect(state.text).toEqual(text);
});

test("Should sortBy amount", () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test("Should sortBy date", () => {
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe('date');
});

test('Should set startDate', () => {
    const startDate = moment(0).add(2, 'days');
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate', () => {
    const endDate = moment(0).add(2, 'days');
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});