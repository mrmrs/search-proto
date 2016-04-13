
import React from 'react'

const Heading = ({ level, color, ...props }) => {
  const Component = 'h' + level
  return <Component className='' {...props} />
}

Heading.defaultProps = {
  level: 2,
  color: ''
}

export default Heading
