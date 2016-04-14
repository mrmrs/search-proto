
import React from 'react'

const GlobalSearchBar = ({ header,showGrid, showList, ...props }) => (
  <article data-name='GlobalSearchBar' className='tc pt3'>
      <label className="db mb2 b f6">Find the perfect photo</label>
    <div className='border-box dib pa1 pl2 pr4 br2 bg-white nowrap box ba b--color'>
      <svg
        className="gray dib svg-fill js-geomicon geomicon mw1 relative"
        style={{top: '2px'}}
        data-icon="search" viewBox="0 0 32 32">
        <title>search icon</title>
        <path d="M12 0 A12 12 0 0 0 0 12 A12 12 0 0 0 12 24 A12 12 0 0 0 18.5 22.25 L28 32 L32 28 L22.25 18.5 A12 12 0 0 0 24 12 A12 12 0 0 0 12 0 M12 4 A8 8 0 0 1 12 20 A8 8 0 0 1 12 4"></path>
      </svg>
      <input className='bg-white border-box ph3 pv2 input-reset focus-transparent bn dib' type='text' placeholder="I'm looking for..."/>
      <input type="submit" value="Search" className="f6 dim bg-blue white br2 focus-transparent input-reset ba b--color" />
    </div>
    <div className="mt4">
      <a href="#" className='dib mw2 dim link mr2' onClick={showGrid}>
        <svg className="js-geomicon geomicon svg-fill w-100" data-icon="grid" viewBox="0 0 32 32">
          <title>grid icon</title>
          <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z"></path>
        </svg>
      </a>
      <a href="#" className='dib mw2 dim link' onClick={showList}>
        <svg
          className="js-geomicon geomicon svg-fill w-100"
          data-icon="list"
          viewBox="0 0 32 32">
            <title>list icon</title>
            <path d="M3 8 A3 3 0 0 0 9 8 A3 3 0 0 0 3 8 M12 6 L28 6 L28 10 L12 10z M3 16 A3 3 0 0 0 9 16 A3 3 0 0 0 3 16 M12 14 L28 14 L28 18 L12 18z M3 24 A3 3 0 0 0 9 24 A3 3 0 0 0 3 24 M12 22 L28 22 L28 26 L12 26z"></path>
          </svg>
        </a>
    </div>
  </article>
)

export default GlobalSearchBar
