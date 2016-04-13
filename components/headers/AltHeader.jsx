

import React from 'react'

const AltHeader = ({ header,...props }) => (
  <header data-name='AltHeader' className='black'>
    <h1 className='black' children={header.title} />
  </header>
)

export default AltHeader
