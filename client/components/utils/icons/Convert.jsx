import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Convert = (props) => {
  return (
    <Svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M1.857 7.86a6.13 6.13 0 0 1 1.796-4.204 6.111 6.111 0 0 1 4.345-1.8 6.096 6.096 0 0 1 4.341 1.801c.177.177.343.364.497.56l-1.075.84a.142.142 0 0 0-.015.213c.018.019.042.033.068.039l3.138.768a.143.143 0 0 0 .177-.138l.014-3.23a.142.142 0 0 0-.23-.113l-1.008.788A7.498 7.498 0 0 0 .5 7.854.143.143 0 0 0 .643 8h1.071a.143.143 0 0 0 .143-.14Zm13.5.14h-1.071a.143.143 0 0 0-.143.14 6.11 6.11 0 0 1-1.796 4.204 6.114 6.114 0 0 1-4.345 1.799 6.11 6.11 0 0 1-4.84-2.36l1.075-.84a.143.143 0 0 0-.053-.252l-3.138-.768a.143.143 0 0 0-.176.138l-.013 3.232c0 .12.138.187.23.112l1.008-.787A7.499 7.499 0 0 0 15.5 8.147.144.144 0 0 0 15.357 8Z'
        fill='#435E75'
      />
    </Svg>
  );
};

export default Convert;