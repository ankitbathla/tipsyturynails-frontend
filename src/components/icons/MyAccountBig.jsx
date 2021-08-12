/* eslint-disable react/jsx-no-literals */
import React from 'react'

const MyAccountBig = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="40"
      height="40"
      {...props}
    >
      <defs>
        <path
          id="myAccountBig-path-2"
          fillRule="evenodd"
          d="M15.82358385 27.97224935s-6.03817605-.29708697-8.07306626 4.6837861v3.79563603"
        />
        <path
          id="myAccountBig-path-3"
          fillRule="evenodd"
          d="M32.33903742 27.97224935s-6.03817605-.29708697-8.07306626 4.6837861v3.79563603"
        />
      </defs>
      <g>
        <ellipse cx="20" cy="20" fill="rgb(1,183,143)" rx="20" ry="20" />
        <g>
          <g>
            <use
              fill="rgb(0,0,0)"
              fillOpacity="0"
              xlinkHref="#myAccountBig-path-2"
            />
            <use
              fillOpacity="0"
              stroke="rgb(255,255,255)"
              strokeWidth="1.5"
              xlinkHref="#myAccountBig-path-2"
            />
          </g>
          <g transform="matrix(-1 0 0 1 56.60500857 0)">
            <use
              fill="rgb(0,0,0)"
              fillOpacity="0"
              xlinkHref="#myAccountBig-path-3"
            />
            <use
              fillOpacity="0"
              stroke="rgb(255,255,255)"
              strokeWidth="1.5"
              xlinkHref="#myAccountBig-path-3"
            />
          </g>
          <path
            fill="none"
            stroke="rgb(255,255,255)"
            strokeWidth="1.5"
            d="M19.975 11.375h0c3.12378001 0 5.65989305 2.53611304 5.65989305 5.65989305v3.2342246c0 3.12378-2.53611304 5.65989305-5.65989305 5.65989305h0c-3.12378001 0-5.65989305-2.53611304-5.65989305-5.65989305v-3.2342246C14.31510695 13.91111304 16.85122 11.375 19.975 11.375z"
          />
        </g>
      </g>
    </svg>
  )
}

export default MyAccountBig
