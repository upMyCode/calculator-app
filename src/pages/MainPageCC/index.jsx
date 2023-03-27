import React, { Component } from 'react'
import { Header, ManageSettings } from '../../components'

class MainPageCC extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <>
        <Header />
        <ManageSettings dispatch={dispatch} />
      </>
    )
  }
}

export default MainPageCC
