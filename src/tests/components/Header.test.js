// react-test-renderer
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startSignout={() => { }} />);
    expect(wrapper).toMatchSnapshot();

    /*  expect(wrapper.find('h1').text()).toBe('Expensify'); */
    /*     const renderer = new ReactShallowRenderer;
        renderer.render(<Header />);
        expect(renderer.getRenderOutput()).toMatchSnapshot(); */
});

test('Should call startLogout', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});