
import React from 'react'

import GlobalSearchBar from './searchbars/GlobalSearchBar'
import FilteredSearchBar from './searchbars/FilteredSearchBar'

export const searchbars = [
  GlobalSearchBar,
  FilteredSearchBar
]

class SearchBars extends React.Component {

  constructor () {
    super()
    this.defaultProps = {
      i: 0
    }
  }

  static getSearchBars () {
    return searchbars
  }

  render () {
    const { i } = this.props
    const Component = SearchBars.getSearchBars()[i]
    return <Component {...this.props} />
  }
}

export default SearchBars
