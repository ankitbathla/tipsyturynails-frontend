/* eslint-disable react/jsx-no-literals */
import React from 'react'

function CartIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path
        fillOpacity="0"
        fillRule="evenodd"
        strokeWidth="1.5"
        d="M2.382 3.763h1.922l3.07 9.439h11.044l1.972-7.844H8.66"
      />
      <ellipse
        cx="9.238"
        cy="18.381"
        fillOpacity="0"
        strokeWidth="1.5"
        rx="1.81"
        ry="1.81"
      />
      <ellipse
        cx="17.381"
        cy="18.381"
        fillOpacity="0"
        strokeWidth="1.5"
        rx="1.81"
        ry="1.81"
      />
      <path
        fillOpacity="0"
        fillRule="evenodd"
        strokeWidth="1.5"
        d="M10.103 16.7h6.533"
      />
    </svg>
  )
}

export default CartIcon
