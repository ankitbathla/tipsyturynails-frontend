/* eslint-disable react/jsx-no-literals */
import React from 'react'

const ShareButtonHover = props => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      width="18"
      {...props}
    >
      <defs>
        <ellipse
          id="ellipse-2"
          opacity="1"
          rx="2.5999999999999623"
          ry="2.600000000000001"
          cx="12.399999999999235"
          cy="5.600000000000001"
        />
        <mask
          id="mask-3"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <rect opacity="1" x="0" y="0" width="18" height="18" fill="black" />
          <use xlinkHref="#ellipse-2" fill="white" />
        </mask>
        <ellipse
          id="ellipse-4"
          opacity="1"
          rx="2.5999999999999623"
          ry="2.600000000000011"
          cx="12.399999999999235"
          cy="13.400000000000194"
        />
        <mask
          id="mask-5"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <rect opacity="1" x="0" y="0" width="18" height="18" fill="black" />
          <use xlinkHref="#ellipse-4" fill="white" />
        </mask>
        <ellipse
          id="ellipse-6"
          opacity="1"
          rx="2.599999999999963"
          ry="2.6000000000000076"
          cx="4.599999999999962"
          cy="9.5000000000001"
        />
        <mask
          id="mask-7"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <rect opacity="1" x="0" y="0" width="18" height="18" fill="black" />
          <use xlinkHref="#ellipse-6" fill="white" />
        </mask>
      </defs>
      <g>
        <g opacity="1">
          <g opacity="0">
            <rect
              fill="rgb(200,200,200)"
              fillOpacity="1"
              opacity="1"
              x="0"
              y="0"
              width="18"
              height="18"
            />
          </g>
          <g opacity="1">
            <g opacity="1">
              <use
                xlinkHref="#ellipse-2"
                fillOpacity="0"
                stroke="rgb(251,88,108)"
                strokeOpacity="1"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                mask="url(#mask-3)"
              />
            </g>
            <g opacity="1">
              <use
                xlinkHref="#ellipse-4"
                fillOpacity="0"
                stroke="rgb(251,88,108)"
                strokeOpacity="1"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                mask="url(#mask-5)"
              />
            </g>
            <g opacity="1">
              <use
                xlinkHref="#ellipse-6"
                fillOpacity="0"
                stroke="rgb(251,88,108)"
                strokeOpacity="1"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                mask="url(#mask-7)"
              />
            </g>
            <g opacity="1">
              <path
                fillOpacity="0"
                stroke="rgb(251,88,108)"
                strokeOpacity="1"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                opacity="1"
                fillRule="evenodd"
                d="M6.549999999999272 8.200000000000207L10.449999999999124 5.925000000000182"
              />
            </g>
            <g opacity="1">
              <path
                fillOpacity="0"
                stroke="rgb(251,88,108)"
                strokeOpacity="1"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                opacity="1"
                fillRule="evenodd"
                d="M6.549999999999272 11.125L10.124999999999199 13.075000000000003"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default ShareButtonHover
