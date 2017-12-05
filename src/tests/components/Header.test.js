import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

// should call startLogout on button click
// use jest spy
test('should call startLogout on button click', () => {
  // create the spy
  const startLogout = jest.fn()
  // we pass the spy into Header -> shallow render our component
  const wrapper = shallow(<Header startLogout={startLogout} />)
  // find the button and click it by simulate
  wrapper.find('button').simulate('click')
  // make the assertion -> expect it to have been called
  expect(startLogout).toHaveBeenCalled()
})
