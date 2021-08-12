/* eslint-disable react/jsx-no-literals */
import React from 'react'

const ErrorIcon = props => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path
          id="error-path-2"
          opacity="1"
          fillRule="evenodd"
          d="M11.794664020756798 4.698390259223845C12.185752326322227 4.0100748414286915 13.183605427726857 4.027554755188817 13.550346022111402 4.729145457489685L21.403430017696 19.75243657947755C21.751460858426125 20.418234709569962 21.268478569113928 21.215690788821238 20.517204573734166 21.215690788821238L4.128159713383704 21.215690788821238C3.3614245861831114 21.215690788821238 2.879928790009155 20.38832426533964 3.2587031559909363 19.72168138121171L11.794664020756798 4.698390259223845Z"
        />
        <mask
          id="error-mask-3"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <rect opacity="1" x="0" y="0" width="24" height="24" fill="black" />
          <use xlinkHref="#error-path-2" fill="white" />
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
              width="24"
              height="24"
            />
          </g>
          <g opacity="1">
            <g opacity="1">
              <use
                xlinkHref="#error-path-2"
                fillOpacity="0"
                stroke="rgb(234,52,58)"
                strokeOpacity="1"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                mask="url(#mask-3)"
              />
            </g>
            <g opacity="1">
              <ellipse
                fill="rgb(234,52,58)"
                fillOpacity="1"
                opacity="1"
                rx="0.7884349109724225"
                ry="0.7884349109724216"
                cx="12.461218931669205"
                cy="17.403393486531023"
              />
            </g>
            <g opacity="1">
              <rect
                fill="rgb(234,52,58)"
                fillOpacity="1"
                opacity="1"
                x="11.672784020696781"
                y="9.307479287779529"
                width="1.576869821944845"
                height="5.519044376806947"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default ErrorIcon
