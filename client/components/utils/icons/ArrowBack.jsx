import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowBack = (props) => {
  return (
    <Svg
      width={8}
      height={19}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='m9 .937-8 9.392 8 9.393'
        stroke='#435E75'
        strokeWidth={1.2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default ArrowBack;
