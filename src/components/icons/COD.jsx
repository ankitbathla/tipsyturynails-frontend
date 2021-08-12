/* eslint-disable react/jsx-no-literals */
import React from 'react'

const CashOnDelivery = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      {...props}
    >
      <defs>
        <rect id="COD-rect-1" width="40" height="40" x="0" y="0" />
        <mask
          id="COD-mask-2"
          maskContentUnits="userSpaceOnUse"
          maskUnits="userSpaceOnUse"
        >
          <rect width="40" height="40" x="0" y="0" fill="black" />
          <use fill="white" xlinkHref="#COD-rect-1" />
        </mask>
      </defs>
      <g>
        <use fill="none" xlinkHref="#COD-rect-1" />
        <g mask="url(#COD-mask-2)">
          <ellipse cx="20" cy="20.039" fill="none" rx="19.922" ry="19.961" />
          <g>
            <path
              fill="rgb(0,182,144)"
              fillRule="evenodd"
              d="M31.65273437 36.47847656L28.9375 37.32832031 26.59140625 38.0625H14.26949219L11.875 30.41226563 4 5.25l7.875-2.46503906 8.40820312-2.6315625L28.9375 27.80367188l2.71523437 8.67480468z"
            />
            <path
              fill="rgb(3,217,172)"
              fillRule="evenodd"
              d="M25.89651953 33.46653516l.588 1.87884375L18.9690625 37.697625l-.58808203-1.87892578-1.87884375.58808203L7.87728906 8.84994141l1.87884375-.588-.588-1.87892578 7.51545703-2.35216407.58808203 1.87884375 1.87884375-.58808203 8.62484766 27.55683985-1.87884375.58808203z"
            />
            <path
              fill="rgb(0,182,144)"
              fillRule="evenodd"
              d="M11.875 0h17.0625v38.0625s-3.07095343 1.68225163-8.34326593 1.68225163S11.875 38.0625 11.875 38.0625V0z"
            />
            <path
              fill="rgb(3,217,172)"
              fillRule="evenodd"
              d="M24.34375 33.46875v1.96875h-7.875v-1.96875H14.5v-28.875h1.96875V2.625h7.875v1.96875h1.96875v28.875h-1.96875z"
            />
            <ellipse
              cx="20.406"
              cy="19.031"
              fill="rgb(0,182,144)"
              rx="3.281"
              ry="3.281"
            />
            <path
              fill="rgb(245,203,170)"
              fillRule="evenodd"
              d="M34.1875 22.3125L34.5 34s-.67596518.2446875-2 1.5c-.27401491.25979252-3.5625 2.5-3.5625 2.5-3.62436867 0-5.90625-2.87563133-5.90625-6.5h.013125l-4.25742187-6.30041016c-.8116264-1.20125285-.49577812-2.83301319.70546875-3.64464843 1.20125284-.8116264 2.83301318-.49577812 3.64464843.70546875L26.96875 27.5625h1.96875v-15.75l4.94115234 9.2646914c.2027729.3801813.30884261.80443197.30884766 1.2353086z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default CashOnDelivery
