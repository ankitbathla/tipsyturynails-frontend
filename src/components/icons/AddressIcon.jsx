/* eslint-disable react/jsx-no-literals */
import React from 'react'

function AddressICon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path
          id="madd-path-2"
          fillRule="evenodd"
          d="M8.488 6a2 2 0 00-2 2v9.456a2 2 0 002 2H16a2 2 0 002-2V8a2 2 0 00-2-2H8.488z"
          opacity="1"
        />
        <mask
          id="madd-mask-3"
          x="0"
          y="0"
          maskContentUnits="userSpaceOnUse"
          maskUnits="userSpaceOnUse"
        >
          <path d="M0 0H24V24H0z" />
          <use fill="#fff" xlinkHref="#madd-path-2" />
        </mask>
        <path
          id="madd-path-6"
          fillRule="evenodd"
          d="M12.178 14.422s-.881-.043-1.178.684v.554"
          opacity="1"
        />
        <path
          id="madd-path-7"
          fillRule="evenodd"
          d="M14.589 14.422s-.882-.043-1.179.684v.554"
          opacity="1"
        />
      </defs>
      <use
        fillOpacity="0"
        strokeWidth="2"
        mask="url(#madd-mask-3)"
        xlinkHref="#madd-path-2"
      />
      <path
        fillRule="evenodd"
        d="M5.5 10.488h2.817a.5.5 0 010 1H5.5a.5.5 0 010-1zM5.5 13.916h2.817a.5.5 0 010 1H5.5a.5.5 0 010-1z"
      />
      <g>
        <g fillOpacity="0">
          <use xlinkHref="#madd-path-6" />
          <use xlinkHref="#madd-path-6" />
        </g>
        <g fillOpacity="0" transform="matrix(-1 0 0 1 27.999 0)">
          <use xlinkHref="#madd-path-7" />
          <use xlinkHref="#madd-path-7" />
        </g>
        <path
          fill="none"
          d="M12.784 11h0c.456 0 .826.544.826 1.215v.694c0 .67-.37 1.215-.826 1.215h0c-.456 0-.826-.544-.826-1.215v-.694c0-.67.37-1.215.826-1.215z"
        />
      </g>
    </svg>
  )
}

export default AddressICon
