/* eslint-disable react/jsx-no-literals */
import React from 'react'

const MedicineEmpty = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="92"
      height="92"
      viewBox="0 0 92 92"
      {...props}
    >
      <defs>
        <rect id="medicine-empty-rect-1" width="92" height="92" x="0" y="0" />
        <mask
          id="medicine-empty-mask-2"
          maskContentUnits="userSpaceOnUse"
          maskUnits="userSpaceOnUse"
        >
          <rect width="92" height="92" x="0" y="0" fill="black" />
          <use fill="white" xlinkHref="#medicine-empty-rect-1" />
        </mask>
      </defs>
      <g opacity=".7">
        <use fill="none" xlinkHref="#medicine-empty-rect-1" />
        <g mask="url(#medicine-empty-mask-2)">
          <path
            fill="rgb(227,240,251)"
            fillRule="evenodd"
            d="M11.859375 16.171875h32.34375V32.34375h-32.34375V16.171875z"
          />
          <path
            fill="rgb(228,243,255)"
            fillRule="evenodd"
            d="M1.078125 26.953125h53.90625V92H1.078125V26.953125z"
          />
          <path
            fill="rgb(228,243,255)"
            fillRule="evenodd"
            d="M28.03125 26.953125h26.953125V92H28.03125V26.953125z"
          />
          <path
            fill="rgb(207,221,232)"
            fillRule="evenodd"
            d="M6.46875 0h43.125v21.5625h-43.125V0z"
          />
          <path
            fill="rgb(207,221,232)"
            fillRule="evenodd"
            d="M28.03125 0h21.5625v21.5625h-21.5625V0z"
          />
          <path
            fill="rgb(0,0,0)"
            fillOpacity=".09"
            fillRule="evenodd"
            d="M1.078125 38.8125h53.90625v41.328125H1.078125V38.8125z"
          />
          <path
            fill="rgb(173,188,200)"
            fillRule="evenodd"
            d="M33.421875 0H38.8125v10.70829687h-5.390625V0z"
          />
          <path
            fill="rgb(173,188,200)"
            fillRule="evenodd"
            d="M17.25 0h5.390625v10.70829687H17.25V0z"
          />
          <path
            fill="rgb(228,243,255)"
            fillRule="evenodd"
            d="M37.9140625 56.78125h-7.1875v-7.1875h-5.390625v7.1875h-7.1875v5.390625h7.1875v7.1875h5.390625v-7.1875h7.1875V56.78125z"
          />
          <path
            fill="rgb(228,243,255)"
            fillRule="evenodd"
            d="M81.0390625 88.046875h-21.5625c-5.44938281 0-9.8828125-4.43342969-9.8828125-9.8828125s4.43342969-9.8828125 9.8828125-9.8828125h21.5625c5.44938281 0 9.8828125 4.43342969 9.8828125 9.8828125s-4.43342969 9.8828125-9.8828125 9.8828125z"
          />
          <path
            fill="rgb(207,221,232)"
            fillRule="evenodd"
            d="M81.0390625 68.28125h-10.78125v19.765625h10.78125c5.44938281 0 9.8828125-4.43342969 9.8828125-9.8828125S86.48844531 68.28125 81.0390625 68.28125z"
          />
          <path
            fill="rgb(228,243,255)"
            fillRule="evenodd"
            d="M81.7118125 46.16010156L66.46496875 61.4073047c-3.85339844 3.85321875-10.12305469 3.85321875-13.97645312 0-3.85321875-3.85321875-3.85321875-10.12323438 0-13.97627344l15.24702343-15.24702344c3.85339844-3.85321875 10.12305469-3.85321875 13.97645313 0 3.85303906 3.85321875 3.85303906 10.122875-.00017969 13.97609375z"
          />
          <path
            fill="rgb(207,221,232)"
            fillRule="evenodd"
            d="M67.73535937 32.18364844L60.1119375 39.80725l13.97627344 13.97627344 7.62360156-7.62360156c3.85321875-3.85303907 3.85321875-10.122875 0-13.97627344-3.85321875-3.85321875-10.12305469-3.85321875-13.97645313 0z"
          />
        </g>
      </g>
    </svg>
  )
}

export default MedicineEmpty
