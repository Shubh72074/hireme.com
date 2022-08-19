import React from "react";

export default function logo() {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={120}
      height={50}
      viewBox="0 0 120 50"
    >
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="0.5"
          cy="0.5"
          r="0.774"
          gradientTransform="matrix(0.413, -0.911, 0.59, 0.267, -0.001, 0.822)"
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#fdfdfd" stopOpacity="0.859" />
          <stop offset={1} stopColor="#eb7d06" />
        </radialGradient>
      </defs>
      <rect
        id="Rectangle_1"
        data-name="Rectangle 1"
        width={130}
        height={60}
        fill="none"
      />
      <g
        id="Rectangle_3"
        data-name="Rectangle 3"
        transform="translate(15 14)"
        fill="#b57128"
        stroke="#fcfcfc"
        strokeWidth="0.4"
      >
        <rect width="80.6" height={22} rx={11} stroke="none" />
        <rect
          x="0.2"
          y="0.2"
          width="80.6"
          height="21.6"
          rx="10.8"
          fill="none"
        />
      </g>
      <path
        id="Polygon_2"
        data-name="Polygon 2"
        d="M4.956,4.07a3,3,0,0,1,5.088,0l2.087,3.34A3,3,0,0,1,9.587,12H5.413A3,3,0,0,1,2.869,7.41Z"
        transform="translate(34.364 17) rotate(90)"
        fill="url(#radial-gradient)"
      />
      <text id="HireMe" transform="translate(34 30)" fill="#fff" fontSize={16}>
        <tspan x={0} y={0}>
          HireMe
        </tspan>
      </text>
      <g id="_.com" data-name=".com" transform="translate(-160 -203)">
        <g
          id="Rectangle_2"
          data-name="Rectangle 2"
          transform="translate(233 235)"
          fill="#c67014"
          stroke="#fdf2f2"
          strokeWidth="0.1"
        >
          <rect width={17} height={7} rx="3.5" stroke="none" />
          <rect
            x="0.05"
            y="0.05"
            width="16.9"
            height="6.9"
            rx="3.45"
            fill="none"
          />
        </g>
        <text
          id="_.com-2"
          data-name=".com"
          transform="translate(235 240)"
          fill="#fff"
          fontSize={6}
          fontFamily="TwCenMT-Regular, Tw Cen MT"
          letterSpacing="0.06em"
        >
          <tspan x={0} y={0}>
            .com
          </tspan>
        </text>
      </g>
    </svg>
  );
}
