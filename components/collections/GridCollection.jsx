import React from 'react'

const GridCollection = ({ name, items, ...props }) => (
  <section data-name='GridCollection' className="black">
    <h2 className='black' children={name} />
    <ul className='black'>
      {items.map((item, i) => (
        <li key={i} className='black'>
          <a href={item.href} className='black'>
            <span className="black">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
)

export default GridCollection
