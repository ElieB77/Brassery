import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const Gallery = (props) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.625 2.625H4.375a1.75 1.75 0 0 0-1.75 1.75v12.25c0 .966.784 1.75 1.75 1.75h12.25a1.75 1.75 0 0 0 1.75-1.75V4.375a1.75 1.75 0 0 0-1.75-1.75Z"
      stroke="#5B84B8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.438 8.75a1.313 1.313 0 1 0 0-2.625 1.313 1.313 0 0 0 0 2.625ZM18.375 13.125 14 8.75l-9.625 9.625"
      stroke="#5B84B8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Gallery
