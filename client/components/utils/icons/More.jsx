import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const More = (props) => {
  return (
    <Svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M.857 7.357h1.286v1.286H.857V7.357Zm3.25 0h1.286v1.286H4.107V7.357Zm6.5 0h1.286v1.286h-1.286V7.357Zm3.25 0h1.286v1.286h-1.286V7.357Zm-6.5 0h1.286v1.286H7.357V7.357Z'
        fill='#435E75'
      />
    </Svg>
  );
};

export default More;
