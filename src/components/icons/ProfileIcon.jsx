/* eslint-disable react/jsx-no-literals */
import React from 'react'

function ProfileIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      {...props}
    >
      <defs>
        <path
          id="path-2"
          fillRule="evenodd"
          d="M8.793 14.381s-4.14-.204-5.536 3.212v2.602h10.208"
          opacity="1"
        />
        <path
          id="path-3"
          fillRule="evenodd"
          d="M15.447 14.381s-4.14-.204-5.536 3.212v2.602h10.207"
          opacity="1"
        />
      </defs>
      <g fillOpacity="0">
        <use xlinkHref="#path-2" />
        <use strokeWidth="1.5" xlinkHref="#path-2" />
      </g>
      <g fillOpacity="0" transform="matrix(-1 0 0 1 30.029 0)">
        <use xlinkHref="#path-3" />
        <use strokeWidth="1.5" xlinkHref="#path-3" />
      </g>
      <path
        fillOpacity="0"
        fillRule="evenodd"
        strokeWidth="1.5"
        d="M11.64 3h0a3.883 3.883 0 013.881 3.881V9.1a3.883 3.883 0 01-3.881 3.88h0A3.883 3.883 0 017.759 9.1V6.88A3.883 3.883 0 0111.64 3z"
      />
    </svg>
  )
}

export default ProfileIcon
