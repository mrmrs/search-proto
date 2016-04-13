import React from 'react'

const ChromelessGridCollection = ({ header, items, ...props }) => (
  <section data-name='ChromelessGridCollection' className="black">
    <h2 className='black' children={header.name} />
    <ul className='black'>
      {items.map((item, i) => (
        <li key={i} className='black'>
          <a href='#' className='black'>
            <span className="black"></span>
          </a>
        </li>
      ))}
    </ul>
  </section>
)

export default ChromelessGridCollection
