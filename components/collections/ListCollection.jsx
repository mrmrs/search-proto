
import React from 'react'

const ListCollection = ({ name, items, ...props }) => (
  <section data-name='ListCollection' className='pa4 ph7-ns'>
    <h2 className='' children={name} />
    <ul className='list pl0 ml0'>
      {items.map((item, i) => (
        <li key={i} className='w-100 pv3'>
          <img src={item.source.cloudinary_id} className='db w-100 mw-100' />
        </li>
      ))}
    </ul>
  </section>
)

export default ListCollection
