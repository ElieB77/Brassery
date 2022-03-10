import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SendArrow = (props) => {
  return (
    <Svg
      width={19}
      height={18}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='m1.042 15.699 1.94-6.71-1.94-6.71c-.24-.82.6-1.55 1.38-1.18l15.1 6.99c.77.36.77 1.46 0 1.81l-15.1 6.99a1 1 0 0 1-1.38-1.19ZM2.982 8.989h4.79'
        stroke='#435E75'
        strokeWidth={1.2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default SendArrow;
