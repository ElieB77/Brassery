import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const Import = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.08 8.287 9.188 15.18A4.502 4.502 0 1 1 2.82 8.812L9.713 1.92a3.002 3.002 0 1 1 4.245 4.245l-6.9 6.892a1.5 1.5 0 1 1-2.123-2.122l6.368-6.36"
      stroke="#5B84B8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Import