
import React from 'react'

const DetailListCollection = ({ name, items, ...props }) => (
    <section data-name='DetailListCollection' className='pa4 ph5-ns'>
    <h2 className='' children={name} />
    <ul className='list pl0 ml0'>
    {items.map((item, i) => (
          <li key={i} className='dt w-100 pv3 bt b--color'>
          <div className='dtc v-mid min-w3 mw5'>
            <img src={item.source.cloudinary_id} className='db dim w-100 mw-100' />
          </div>
          <div className='db dtc-ns v-mid pl3 mw5 mw6-ns'>
          <p className="f3 b mv0">
          <span className="dib pv2">£10</span>
          <a href="#" className="dib ml2 bg-blue white link f6 pa2 br2">Add to cart</a>
          </p>
          <div>
          <b class="db">Name</b>
          <a href="#" className="link pa2 mt2 dib f6 b twitter br2">Tweet this</a>
          </div>
          <div>
          <p className='lh-copy measure f6 overflow-y-auto h3 dib'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="dn db-ns">
          <h5>Tags</h5>
          <a className="underline f6 pr2">boeing</a>
          <a className="underline f6 pr2">boeing 787 </a>
          <a className="underline f6 pr2">sunrise</a>
          <a className="underline f6 pr2">contrail</a>
          <a className="underline f6 pr2">soft </a>
          <a className="underline f6 pr2">light</a>
          <a className="underline f6 pr2">clouds</a>
          <a className="underline f6 pr2">sky</a>
          <a className="underline f6 pr2">aerial</a>
          <a className="underline f6 pr2">cockpit</a>
          <a className="underline f6 pr2">flying</a>
          <a className="underline f6 pr2">travel</a>
          <a className="underline f6 pr2">panorama</a>
          <a className="underline f6 pr2">airplane</a>
          <a className="underline f6 pr2">aeroplane</a>
          <a className="underline f6 pr2">high</a>
          <a className="underline f6 pr2">altitude</a>
          </div>
          </div>
          </div>
          </li>
          ))}
          </ul>
          </section>
          )

          export default DetailListCollection
