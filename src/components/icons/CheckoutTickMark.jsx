/* eslint-disable react/jsx-no-literals */
import React from 'react'
import { withTheme } from 'styled-components'

function TickMarkSmall(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <circle
          cx="10"
          cy="10"
          r="10"
          fill={props.theme.secondaryColor || '#6ab2ad'}
        />
        <path strokeLinecap="round" d="M5.6 10.92l2.56 2.78 6.261-6.327" />
      </g>
    </svg>
  )
}

export default withTheme(TickMarkSmall)
