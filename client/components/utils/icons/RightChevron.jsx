import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightChevron = (props) => (
  <Svg
    width={10}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1.392 19.392 8-9.392-8-9.393"
      stroke="#435E75"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default RightChevron;
