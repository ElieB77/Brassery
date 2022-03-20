import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const Resources = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G clipPath='url(#a)'>
        <Path
          d='M19.286 8.482h-2.411V5.947a.714.714 0 0 0-.714-.715H9.129L6.511 2.728a.182.182 0 0 0-.123-.05H.714A.714.714 0 0 0 0 3.394v13.214c0 .395.32.715.714.715h15.58c.29 0 .554-.177.664-.447l2.99-7.41a.714.714 0 0 0-.663-.982Zm-4.018 0H3.884a.716.716 0 0 0-.663.447l-1.614 4V4.286h4.208l2.67 2.553h6.783v1.643Z'
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h20v20H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Resources;
