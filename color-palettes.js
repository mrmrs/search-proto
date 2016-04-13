
// import colorable from 'colorable'
// import colorbrewer from 'colorbrewer'
// import hello from 'hello-color'

/*
const keys = Object.keys(colorbrewer)

const brewercolors = keys.map((key) => {
    const palette = colorbrewer[key]
    const sizes = Object.keys(palette)
    const sizeKey = sizes[sizes.length - 1]
    return palette[sizeKey]
  })
  .map((p) => {
    return colorable(p)
      .reduce((a, b) => {
        const combos = b.combinations.map((combo) => {
          combo.main = b.hex
          return combo
        })
        return a.concat(combos)
      }, [])
      .sort((a, b) => b.contrast - a.contrast)
  })
  .map((p) => {
    let combo = p[0]
    let inverse = hello({ color: combo.hex })
    return {
      primary: combo.hex,
      base: combo.main,
      highlight: hello(combo.hex).color
    }
  })
*/


const palettes = [
  {
    primary: '#222222',
    base: '#ffffee',
    highlight: '#3c99aa',
    border:  'rgba(34,34,34,.1)'
  },
  {
    primary: '#001f3f',
    base: '#7fdbff',
    highlight: '#ddd',
    border:  'rgba(0,31,63,.1)'
  },
  {
    primary: '#ddd',
    base: '#0074D9',
    highlight: '#ddd',
    border:  'rgba(238,238,238,.1)'
  },
  {
    primary: '#85144B',
    base: '#eeeeee',
    highlight: '#3c99aa',
    border:  'rgba(133,20,75,.1)'
  }
  /*
  {
    primary: '',
    base: '',
    highlight: ''
  },
  {
    primary: '',
    base: '',
    highlight: ''
  },
  {
    primary: '',
    base: '',
    highlight: ''
  },
  */
]

export default palettes
