
import React from 'react'

const AltFooter = ({ footer, ...props }) => (
  <footer data-name='AltFooter' className='black pa4 bt b--black-10'>
    <h1 children='{footer.title}'/>
    <small children='{footer.copyright}' />
  </footer>
)

export default AltFooter
