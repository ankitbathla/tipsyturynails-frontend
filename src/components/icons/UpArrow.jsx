/* eslint-disable react/jsx-no-literals */
import React from 'react'

function UpArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path fill="#C8C8C8" fillOpacity="0" d="M0 0H24V24H0z" />
      <path
        fillOpacity="0"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1.5"
        d="M6 9l5.65 6.025L17.556 9"
        opacity="0.5"
        transform="rotate(-180 11.778 12.013)"
      />
    </svg>
  )
}

export default UpArrow
