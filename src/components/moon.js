import React from "react";
import styled from "styled-components";

const MoonRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 4px;
`;

const Moon = () => (
  <MoonRoot>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 1280.000000 1145.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1145.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M3020 8261 c-476 -159 -999 -432 -1360 -710 -790 -608 -1325 -1436
-1549 -2396 -78 -337 -105 -574 -105 -950 0 -282 6 -383 40 -610 102 -692 368
-1331 792 -1905 558 -755 1387 -1312 2302 -1549 882 -229 1763 -176 2615 156
183 71 649 303 795 395 245 155 471 326 635 481 l80 76 -91 -25 c-219 -58
-502 -104 -767 -125 -191 -14 -565 -7 -757 15 -1257 146 -2348 812 -3048 1862
-355 533 -575 1130 -668 1819 -21 153 -30 666 -15 837 88 983 497 1890 1155
2566 60 61 105 112 100 112 -5 0 -74 -22 -154 -49z"
        />
      </g>
    </svg>
  </MoonRoot>
);

export default Moon;
