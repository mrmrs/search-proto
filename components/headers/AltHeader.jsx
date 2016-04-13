

import React from 'react'

const AltHeader = ({ header,...props }) => (
  <header data-name='AltHeader' className='ph4 pv2 dt w-100 bb b--black-10'>
    <div className='dtc v-mid w-50'>
      <img src={header.logo} className='dib mw3' />
    </div>
    <div className='dtc v-mid w-50 tr'>
      <img src={header.avatar} className='dib mw2 br-100' />
    </div>
  </header>
)

export default AltHeader
