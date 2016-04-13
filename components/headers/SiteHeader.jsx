
import React from 'react'

const SiteHeader = ({ header,...props }) => (
  <header data-name='SiteHeader' className='black'>
    <h1 className='black' children={header.title} />
  </header>
)

export default SiteHeader
