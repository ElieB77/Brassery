import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Next = (props) => {
  return (
    <Svg
      width={18}
      height={15}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M1 7h14.976M10 1l6 6M10 13l6-6'
        stroke='#435E75'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Next;
