import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

// LoginPage test file -> Should call startLogin on button click

test('should call startLogin on button click', () => {
    // create the spy
    const startLogin = jest.fn()
    // we pass the spy into LoginPage -> shallow render our component
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    // find the button and click it by simulate
    wrapper.find('button').simulate('click')
    // make the assertion -> expect it to have been called
    expect(startLogin).toHaveBeenCalled()
  })