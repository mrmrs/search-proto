
import React from 'react'

const ListCollection = ({ items, ...props }) => (
  <section data-name='ListCollection' className='pa4'>
    <h2 className='black' children='title' />
    <ul className='list pl0 ml0'>
      {items.map((item, i) => (
        <li key={i} className='w-100 pv3'>
          <img src={item.source.cloudinary_id} className='db w-100 mw-100' />
          <span children={item.source.title} className='db b'/>
        </li>
      ))}
    </ul>
  </section>
)

export default ListCollection
