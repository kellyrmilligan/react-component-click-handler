react-component-click-handler
=====================

[![Coverage Status](https://coveralls.io/repos/github/kellyrmilligan/react-component-click-handler/badge.svg?branch=master)](https://coveralls.io/github/kellyrmilligan/rreact-component-click-handler?branch=master)


sometimes all you need when you have a list of data that you're rendering in react is a click handler to forward that data to a method. I ended up not liking creating components that were separate just for this one case. with this you can wrap the jsx in the list rendering to have a click handler, specify the data, and it will give you a click handler that will forward the data for you.


## Usage
```js
// @flow
import React from 'react'
import ClickHandler from 'react-component-click-handler'

const List = ({ items, onClick }) => (
  <ul>
    {items.map(item => (
      <ClickHandler key={item.id} data={item} onClick={onClick}>
        {(handleClick) => (
          <li onClick={handleClick}>
              {question.text}
          </li>
        )}
      </ClickHandler>
    ))}
  </ul>
)

export default List
```

check out the tests in the repo for more examples!

ClickHander will not render any DOM elements, it just simply calls children as a function.
