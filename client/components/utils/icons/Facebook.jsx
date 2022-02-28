import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import StyleGuide from '../StyleGuide';

const Facebook = (props) => {
  return (
    <Svg
      width={39}
      height={40}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G clipPath='url(#a)'>
        <Path
          d='M19.5 40C30.27 40 39 31.046 39 20S30.27 0 19.5 0 0 8.954 0 20s8.73 20 19.5 20Z'
          fill='#3C5A9A'
        />
        <Path
          d='M25.84 6.139h-4.32c-2.563 0-5.414 1.106-5.414 4.917.013 1.328 0 2.6 0 4.031H13.14v4.84h3.058v13.934h5.618V19.835h3.708l.335-4.762h-4.14s.01-2.118 0-2.733c0-1.506 1.528-1.42 1.62-1.42.727 0 2.14.002 2.504 0V6.14h-.002Z'
          fill='#fff'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h39v40H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Facebook;
