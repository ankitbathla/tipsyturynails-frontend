/* eslint-disable react/jsx-no-literals */
import React from 'react'
import { defaultTheme } from '../../theme'

function PlusSign({ name, productDetailPage, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <g fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fillRule="nonzero">
          <rect width="40" height="40" x="0" y="0" rx="4" />
          <path
            fill={
              props.count > 0
                ? defaultTheme.headerBackground
                : defaultTheme.white
            }
            d="M26.1462857 21.5500452L26.1462857 19.0027311 21.3285396 19.0027311 21.3285396 13.7142857 18.5320318 13.7142857 18.5320318 19.0027311 13.7142857 19.0027311 13.7142857 21.5500452 18.5320318 21.5500452 18.5320318 27.032308 21.3285396 27.032308 21.3285396 21.5500452z"
          />
        </g>
      </g>
    </svg>
  )
}

export default PlusSign
