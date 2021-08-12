/* eslint-disable react/jsx-no-literals */
import React from 'react'

export default function Select({ fillColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="12" cy="12" r="12" fill={fillColor} />
        <path
          stroke="#FFF"
          strokeLinecap="round"
          strokeWidth="2"
          d="M6.72 13.103l3.072 3.336 7.514-7.591"
        />
      </g>
    </svg>
  )
}
