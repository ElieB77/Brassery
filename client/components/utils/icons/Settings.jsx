import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Settings = (props) => {
  return (
    <Svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.475 9.325c-1.575 0-2.366 1.909-1.252 3.023a.525.525 0 0 1 0 .743l-1.131 1.132a.525.525 0 0 1-.744 0c-1.114-1.115-3.022-.324-3.022 1.252 0 .29-.236.525-.526.525H7.2a.525.525 0 0 1-.525-.525c0-1.578-1.907-2.368-3.023-1.252a.525.525 0 0 1-.743 0L1.777 13.09a.525.525 0 0 1 0-.743c1.114-1.114.324-3.023-1.252-3.023A.525.525 0 0 1 0 8.8V7.2c0-.29.235-.526.525-.526 1.576 0 2.366-1.908 1.252-3.022a.525.525 0 0 1 0-.743L2.91 1.777a.525.525 0 0 1 .743 0c1.114 1.114 3.023.324 3.023-1.252C6.675.235 6.91 0 7.2 0h1.6c.29 0 .525.235.525.525 0 1.576 1.91 2.366 3.023 1.252a.525.525 0 0 1 .743 0l1.132 1.132a.525.525 0 0 1 0 .743c-1.115 1.114-.324 3.022 1.252 3.022.29 0 .525.236.525.526v1.6c0 .29-.235.525-.525.525ZM12.214 8a4.214 4.214 0 1 0-8.427 0 4.214 4.214 0 0 0 8.427 0Z'
        fill='#435E75'
      />
    </Svg>
  );
};

export default Settings;
