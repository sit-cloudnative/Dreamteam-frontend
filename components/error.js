import React from 'react'
import ErrorPage from '../pages/_error'

export default class Error extends React.Component {

  render () {
    if (this.props.statusCode) {
      return (
        <div>
        <div>
            <h1>555</h1>
        </div>
        <h2>{props.errorMessage}</h2>
        <a href="/">Go To Homepage</a>
    </div >
      )
    }
  }
}