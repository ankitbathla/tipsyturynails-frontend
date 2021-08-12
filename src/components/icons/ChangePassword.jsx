/* eslint-disable react/jsx-no-literals */
import React from 'react'

function ChangePassword(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path
          id="cpma-path-2"
          fillRule="evenodd"
          d="M7.925 7.506a3.506 3.506 0 117.012 0v3.269H7.925V7.506z"
          opacity="1"
        />
        <mask
          id="cpma-mask-4"
          x="0"
          y="0"
          maskContentUnits="userSpaceOnUse"
          maskUnits="userSpaceOnUse"
        >
          <path d="M0 0H24V24H0z" />
          <use fill="#fff" xlinkHref="#cpma-path-2" />
        </mask>
        <path
          id="cpma-path-4"
          fillRule="evenodd"
          d="M8 9.638h7a2 2 0 012 2v4.937a2 2 0 01-2 2H8a2 2 0 01-2-2v-4.937a2 2 0 012-2z"
          opacity="1"
        />
        <mask
          id="cpma-mask-5"
          x="0"
          y="0"
          maskContentUnits="userSpaceOnUse"
          maskUnits="userSpaceOnUse"
        >
          <path d="M0 0H24V24H0z" />
          <use fill="#fff" xlinkHref="#cpma-path-4" />
        </mask>
        <ellipse
          id="cpma-ellipse-6"
          cx="11.5"
          cy="14.5"
          opacity="1"
          rx="1.5"
          ry="1.5"
        />
        <mask
          id="cpma-mask-7"
          x="0"
          y="0"
          maskContentUnits="userSpaceOnUse"
          maskUnits="userSpaceOnUse"
        >
          <path d="M0 0H24V24H0z" />
          <use fill="#fff" xlinkHref="#cpma-ellipse-6" />
        </mask>
      </defs>
      <use
        fillOpacity="0"
        strokeWidth="2"
        mask="url(#cpma-mask-4)"
        xlinkHref="#cpma-path-2"
      />
      <use
        fillOpacity="0"
        strokeWidth="2"
        mask="url(#cpma-mask-5)"
        xlinkHref="#cpma-path-4"
      />
      <use
        fillOpacity="0"
        strokeWidth="2"
        mask="url(#cpma-mask-7)"
        xlinkHref="#cpma-ellipse-6"
      />
    </svg>
  )
}

export default ChangePassword
