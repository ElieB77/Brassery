import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import StyleGuide from '../StyleGuide';

const Add = (props) => {
  return (
    <Svg
      width={18}
      height={18}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M1 8.488h14.976M8.488 1v14.976'
        stroke={props.color ? props.color : StyleGuide.colors.secondary}
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Add;
