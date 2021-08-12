/* eslint-disable react/jsx-no-literals */
import React from 'react'

const Info = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <defs>
        <rect id="info-rect-1" width="12" height="12" x="0" y="0" />
        <mask
          id="info-mask-2"
          maskContentUnits="userSpaceOnUse"
          maskUnits="userSpaceOnUse"
        >
          <rect width="12" height="12" x="0" y="0" fill="black" />
          <use fill="white" xlinkHref="#info-rect-1" />
        </mask>
      </defs>
      <g>
        <use fill="none" xlinkHref="#info-rect-1" />
        <g mask="url(#info-mask-2)">
          <path
            fill="rgb(0,0,0)"
            fillRule="evenodd"
            d="M10.24301147 1.75726318c-2.34318542-2.34295654-6.14230346-2.34320068-8.48574829 0-2.34318542 2.34313965-2.34292602 6.14227295 0 8.48571778 2.34317017 2.34265136 6.14230347 2.34295654 8.4857483 0 2.34292602-2.34344483 2.34265136-6.14227295 0-8.48571778zM5.24411011 3.42712402c-.00938416.39416504.2911377.71350098.74194336.71350098.46957397 0 .76983642-.31933594.77009582-.71350098-.00965881-.41296386-.30078125-.72290039-.76097107-.72290039-.45993042 0-.76045227.30963135-.75106811.7229004zm1.53837585 5.1817627c0 .43225098-.35035705.78259277-.78262329.78259277-.43226623 0-.78262329-.3503418-.78262329-.78259277V5.47839355c0-.432312.35035706-.7826538.7826233-.7826538.43226623 0 .78262328.3503418.78262328.7826538v3.13049317z"
          />
        </g>
      </g>
    </svg>
  )
}

export default Info