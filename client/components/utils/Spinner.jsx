import * as React from 'react';
import Svg, { Circle, AnimateTransform } from 'react-native-svg';

const Spinner = (props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      style={{
        margin: 'auto',
        background: '0 0',
        display: "flex",
        shapeRendering: 'auto',
      }}
      width={200}
      height={200}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <Circle
        cx={50}
        cy={50}
        fill='none'
        stroke='#ebc56e'
        strokeWidth={3}
        r={14}
        strokeDasharray='65.97344572538566 23.991148575128552'
      >
        <AnimateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </Circle>
    </Svg>
  );
};

export default Spinner;
