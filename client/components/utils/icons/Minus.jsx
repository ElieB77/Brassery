import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Minus = (props) => {
  return (
    <Svg
      width={17}
      height={15}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path d='M1 7.488h14.976' stroke='#435E75' strokeLinecap='round' />
    </Svg>
  );
};

export default Minus;
