import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Search = (props) => {
  return (
    <Svg
      width={18}
      height={15}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path d='m1 16 5-5' stroke='#435E75' strokeLinecap='round' />
      <Circle cx={10.5} cy={6.5} r={6} stroke='#435E75' />
    </Svg>
  );
};

export default Search;
