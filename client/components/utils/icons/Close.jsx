import * as React from 'react';
import StyleGuide from '../StyleGuide';
import Svg, { Path } from 'react-native-svg';

const Close = (props) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M1 11.59 11.59 1M1 1l10.59 10.59'
        stroke={props.color ? props.color : StyleGuide.colors.secondary}
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Close;
