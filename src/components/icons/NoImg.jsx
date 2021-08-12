/* eslint-disable react/jsx-no-literals */
import React from 'react'

function SvgComponent(props) {
  return (
    <svg width={69} height={54} viewBox="0 0 69 54" {...props}>
      <title>No image</title>
      <g fill="none" fillRule="evenodd">
        <path d="M-1-8h70v70H-1z" />
        <g transform="translate(.61 .046)" fill="#EAEAEA">
          <g transform="translate(0 23.333)">
            <path
              d="M3.218 26.552h36.207V3.218H3.218v23.334zM0 0h42.644v29.77H0V0z"
              fillRule="nonzero"
            />
            <path d="M7.241 21.724L12.07 8.046l8.67 9.796 5.007-2.408v6.29z" />
            <circle cx={32.989} cy={11.264} r={3.218} />
          </g>
          <path
            fillRule="nonzero"
            d="M27.718 5.559l34.373 19.46L49.277 46.77l-4.729-2.537.307 4.312 6.128 3.263 16.65-28.275L26.227.092 14.081 21.536l4.959-.924z"
          />
          <circle cx={49.885} cy={29.77} r={3.218} />
          <path d="M26.552 20.115h8.046l-1.462-6.437z" />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
