/* eslint-disable react/jsx-no-literals */
import React from 'react'

const Close = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="10" cy="10" r="10" fill="#4A4A4A" />
      <path
        fill="#FFF"
        d="M9.057 10.19L6.554 7.686l1.12-1.12 2.503 2.504 2.567-2.566 1.132 1.132-2.567 2.566 2.51 2.51-1.12 1.12-2.51-2.51-2.553 2.554-1.132-1.132z"
      />
    </g>
  </svg>
)

export default Close
