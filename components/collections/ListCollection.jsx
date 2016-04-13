
import React from 'react'

const ListCollection = ({ items, ...props }) => (
  <section data-name='ListCollection'>
    <h2 className='black' children='title' />
    <ul className='black'>
      {items.map((item, i) => (
        <li key={i} className='black'>
          <span children='{item.title}' className='db b'/>
        </li>
      ))}
    </ul>
  </section>
)

export default ListCollection
