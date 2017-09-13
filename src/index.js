// @flow
import React from 'react'

type PropsT = {
  data: any,
  onClick?: Function,
  children?: any
}

export default class ClickHandler extends React.Component<PropsT, void> {
  onClick = (evt: Object): void => {
    this.props.onClick && this.props.onClick(this.props.data)
  }

  render () {
    return this.props.children ? this.props.children(this.onClick) : null
  }
}
