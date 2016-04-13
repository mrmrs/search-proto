import React from 'react'

const GridCollection = ({ name, items, ...props }) => (
  <section data-name='GridCollection' className=''>
    <ul className='list ph2 ml0 cf'>
      {items.map((item, i) => (
        <li key={i} className='fl w-50 w-25-m w-10-l pa2'>
          <a href="#" className='dim link db'>
            <img src={item.source.cloudinary_id} className='db w-100 mw-100' />
          </a>
        </li>
      ))}
    </ul>
  </section>
)

export default GridCollection
