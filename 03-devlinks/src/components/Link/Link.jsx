import React, { Children } from 'react'

const Link = ({ url, children }) => {
  return (
    <li>
       <a href={url}>{children}</a>
    </li>
  )
}

export default Link
