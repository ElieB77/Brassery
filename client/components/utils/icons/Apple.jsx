import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import StyleGuide from '../StyleGuide';

const Apple = (props) => {
  return (
    <Svg
      width={39}
      height={40}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M21.518 3.48C24.662.018 29.031 0 29.031 0s.65 3.257-2.472 6.394c-3.334 3.35-7.124 2.802-7.124 2.802s-.712-2.635 2.083-5.715Zm-1.683 7.997c1.617 0 4.618-1.858 8.524-1.858 6.724 0 9.37 4 9.37 4s-5.174 2.212-5.174 7.579c0 6.054 6.445 8.14 6.445 8.14s-4.505 10.603-10.59 10.603c-2.796 0-4.969-1.575-7.914-1.575-3 0-5.979 1.634-7.919 1.634C7.02 40 0 29.942 0 21.857 0 13.903 5.942 9.73 11.516 9.73c3.623 0 6.435 1.747 8.319 1.747Z'
        fill='#999'
      />
    </Svg>
  );
};

export default Apple;
