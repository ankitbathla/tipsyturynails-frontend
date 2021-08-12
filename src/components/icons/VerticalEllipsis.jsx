/* eslint-disable react/jsx-no-literals */
import React from 'react'

function VerticalEllipsis(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="18"
      viewBox="0 0 4 18"
      {...props}
    >
      <g fillRule="evenodd">
        <circle cx="2" cy="2" r="2" />
        <circle cx="2" cy="9" r="2" />
        <circle cx="2" cy="16" r="2" />
      </g>
    </svg>
  )
}

export default VerticalEllipsis
