
import React from 'react'

const DetailListCollection = ({ name, items, ...props }) => (
  <section data-name='DetailListCollection' className='pa4 ph5-ns'>
    <h2 className='' children={name} />
    <ul className='list pl0 ml0'>
      {items.map((item, i) => (
        <li key={i} className='dt w-100 pv3 bt b--color'>
          <div className='dtc v-mid mw4'>
            <img src={item.source.cloudinary_id} className='db dim w-100 mw-100' />
          </div>
          <div className='dtc v-mid pl3'>
            <div>Name</div>
            <p className='lh-copy measure f6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default DetailListCollection
