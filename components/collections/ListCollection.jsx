
import React from 'react'

const ListCollection = ({ name, items, ...props }) => (
  <section data-name='ListCollection'>
    <h2 className='black' children={name} />
    <ul className='black'>
      {items.map((item, i) => (
        <li key={i} className='black'>
          <a href={item.href} className='black'>
            <span className="black">{item.name}</span>
            <span className="black">{item.description}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
)

export default ListCollection
