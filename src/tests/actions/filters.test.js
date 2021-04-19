import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate set text filter action object with default', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate set text filter action object with value', () => {
    expect(setTextFilter('myQuery')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'myQuery'
    });

});

test('Should generate set sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('Should generate set sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

