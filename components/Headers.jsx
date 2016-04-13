
import React from 'react'

import AltHeader from './headers/AltHeader'
import SiteHeader from './headers/SiteHeader'

export const headers = [
  AltHeader,
  SiteHeader,
]

class Headers extends React.Component {

  constructor () {
    super()
    this.defaultProps = {
      i: 0
    }
  }

  static getHeaders () {
    return headers
  }

  render () {
    const { i } = this.props
    const Component = Headers.getHeaders()[i]
    return <Component {...this.props} />
  }
}

export default Headers
