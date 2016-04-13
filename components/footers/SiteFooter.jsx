
import React from 'react'

const SiteFooter = ({ footer, ...props }) => (
  <footer data-name='SiteFooter' className='black bt b--black-10 pa4'>
    <h1 children={footer.title}/>
    <small children={footer.copyright}/>
  </footer>
)

export default SiteFooter
