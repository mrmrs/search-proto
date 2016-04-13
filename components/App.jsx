
import React from 'react'
import hello from 'hello-color'
import Color from 'color'
import palette from 'colors.css'
import { random, padLeft } from 'lodash'

import palettes from '../color-palettes'

import Headers, { headers } from './Headers'
import Footers, { footers } from './Footers'
import Collections, { collections } from './Collections'
import SearchBars, { searchbars } from './SearchBars'

import Heading from './Heading'
import Text from './Text'

const defaults = {
  colors: {
    primary: '#111',
    base: '#fff',
    highlight: '#0cf',
    border: 'transparent',
  }
}

function randomHex () {
  let hex = Math.floor(Math.random() * 16777215).toString(16)
  return '#' + padLeft(hex, 6, f)
}

function getColor () {
  const keys = Object.keys(palette)
  const key = keys[random(0, keys.length - 1)]
  return palette[key]
}

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      colors: defaults.colors,
      randoms: [],
      header: 0,
      nav: 0,
      collection: 0,
      searchbar: 0,
      footer: 0,
      dark: false
    }
  }

  componentDidMount () {
    const palette = palettes[random(palettes.length - 1)]
    // const { color, base, dark } = hello({
    //   color: randomHex(),
    //   contrast: 3
    // })

    console.log(palettes, palette)
    const { primary, base, highlight, border } = palette
    const state = {
      colors: {
        primary,
        base,
        highlight,
        border,
      },
      header: random(headers.length - 1),
      footer: random(footers.length - 1),
      collection: random(collections.length - 1),
      searchbar: random(searchbars.length - 1),
      // randoms: Object.keys(this.props).map((key, i) =>)
      // dark
    }
    this.setState(state)
  }

  render() {

    const { collections } = this.props
    const { colors, searchbar, header, nav, collection, footer, dark } = this.state

    const reverse = random(1) == 1

    const css = `
      a { color: ${colors.primary}; }
      .svg-fill { fill: currentColor; }
      .b--color { border-color: ${colors.border};
      .bg-color { background-color: ${colors.base}; }
      .color    { color: ${colors.primary}; }
      .bg-transparent { background-color: transparent; }
      .focus-transparent:focus { outline: 0; }
    `

    return (
      <div className='sans-serif' style={{
          color: colors.primary,
          backgroundColor: colors.base
        }}>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <Headers i={0} {...this.props} />
        <SearchBars i={0} {...this.props} />
        <Collections i={collection} {...collections[0]} />
        <Footers i={0} {...this.props} />
      </div>

    )
  }
}

