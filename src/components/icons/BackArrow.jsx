/* eslint-disable react/jsx-no-literals */
import React from 'react'

function BackArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      version="1.1"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fillRule="evenodd" strokeWidth="1">
        <g>
          <g>
            <path d="M0 0H24V24H0z" opacity="0" />
            <g transform="translate(4 4)">
              <path d="M8 0L0 8 8 16 9.4 14.6 3.8 9 16 9 16 7 3.8 7 9.4 1.4z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default BackArrow
