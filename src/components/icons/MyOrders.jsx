/* eslint-disable react/jsx-no-literals */
import React from 'react'

function MyOrders(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          id="path-3"
          fillRule="evenodd"
          d="M6.299 9.897l1.61-3.479A.722.722 0 018.564 6H15.428c.285 0 .544.168.66.429l1.54 3.468"
          opacity="1"
        />
        <path
          id="path-5"
          fillRule="evenodd"
          d="M5.722 8.959h12.556c.399 0 .722.323.722.721v1.155a.722.722 0 01-.722.722H5.722A.722.722 0 015 10.835V9.68c0-.398.323-.721.722-.721z"
          opacity="1"
        />
        <path
          id="path-6"
          fillRule="evenodd"
          d="M18.134 11.557l-1.057 6.609a.722.722 0 01-.713.607H7.636a.722.722 0 01-.713-.607l-1.057-6.61"
          opacity="1"
        />
      </defs>
      <path
        fill="none"
        d="M6.299 9.897l1.61-3.479A.722.722 0 018.564 6h6.864c.285 0 .544.168.66.429l1.54 3.468"
      />
      <path
        fill="#F7F7F7"
        fillRule="evenodd"
        d="M5.722 8.959h12.556c.399 0 .722.323.722.721v1.155a.722.722 0 01-.722.722H5.722A.722.722 0 015 10.835V9.68c0-.398.323-.721.722-.721z"
      />
      <g fillOpacity="0">
        <use xlinkHref="#path-6" />
        <use xlinkHref="#path-6" />
      </g>
    </svg>
  )
}

export default MyOrders
