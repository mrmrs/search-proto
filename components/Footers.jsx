
import React from 'react'

import SiteFooter from './footers/SiteFooter'
import AltFooter from './footers/AltFooter'

export const footers = [
  SiteFooter,
  AltFooter
]

class Footers extends React.Component {

  constructor () {
    super()
    this.defaultProps = {
      i: 0
    }
  }

  static getFooters () {
    return footers
  }

  render () {
    const { i } = this.props
    const Component = Footers.getFooters()[i]
    return <Component {...this.props} />
  }
}

export default Footers
