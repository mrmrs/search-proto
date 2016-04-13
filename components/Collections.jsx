
import React from 'react'

import ListCollection from './collections/ListCollection'
import DetailListCollection from './collections/DetailListCollection'
import GridCollection from './collections/GridCollection'
import ChromelessGridCollection from './collections/ChromelessGridCollection'
import ChromelessTightGridCollection from './collections/ChromelessTightGridCollection'

export const collections = [
  GridCollection,
  ListCollection,
  DetailListCollection,
  ChromelessGridCollection,
  ChromelessTightGridCollection
]

class Collections extends React.Component {

  constructor () {
    super()
    this.defaultProps = {
      i: 0
    }
  }

  static getCollections () {
    return collections
  }

  render () {
    const { i } = this.props
    const Component = Collections.getCollections()[i]
    return <Component {...this.props} />
  }
}

export default Collections
