import React from 'react'

const ChromelessGridCollection = ({ header, items, ...props }) => (
  <section data-name='ChromelessGridCollection' className="">
    <h2 className='pa2' children='title' />
    <ul className='list pl0 ml0 cf w-100'>
      {items.map((item, i) => (
        <li key={i} className='w-100 pa3 fl w-50-m w-25-l'>
          <img src={item.source.cloudinary_id} className='dim db w-100 mw-100' />
        </li>
      ))}
    </ul>
  </section>
)

export default ChromelessGridCollection
