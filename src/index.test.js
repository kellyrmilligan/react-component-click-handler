import React from 'react'
import { mount } from 'enzyme'
import ClickHandler from './index'

describe('<ClickHandler />', () => {
  it('renders without crashing', () => {
    const onClick = jest.fn()
    mount(
      <ClickHandler
        data={{ id: 12345, title: 'test' }}
        onClick={onClick}
      />
    )
  })
  it('will call a function as children', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      <ClickHandler
        data={{ id: 12345, title: 'test' }}
        onClick={onClick}
      >
        {(handleClick) => (
          <li>
            <button onClick={handleClick}>add</button>
            <p>test</p>
          </li>

        )}
      </ClickHandler>
    )

    wrapper.find('button').simulate('click')

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toBeCalledWith({ id: 12345, title: 'test' })
  })
})
