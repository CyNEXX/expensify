import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary count={1} total={255} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with mode expenses', () => {
    const wrapper = shallow(<ExpensesSummary count={8} total={25546848} />);
    expect(wrapper).toMatchSnapshot();
});