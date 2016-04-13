
import React from 'react'

const DetailListCollection = ({ name, items, ...props }) => (
  <section data-name='DetailListCollection' className='black'>
    <h2 className='black' children={name} />
    <ul className='black'>
      {items.map((item, i) => (
        <li key={i} className='black'>
        </li>
      ))}
    </ul>
  </section>
)

export default DetailListCollection
