import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Location = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M10 5.87c-.668 0-1.295.26-1.768.733A2.491 2.491 0 0 0 7.5 8.37c0 .668.261 1.295.732 1.768A2.49 2.49 0 0 0 10 10.87c.667 0 1.294-.26 1.768-.732.473-.473.732-1.1.732-1.768 0-.667-.26-1.294-.732-1.767A2.482 2.482 0 0 0 10 5.87Zm7.647-.846a8.092 8.092 0 0 0-1.783-2.582A8.277 8.277 0 0 0 13.225.705 8.372 8.372 0 0 0 10 .067a8.412 8.412 0 0 0-3.226.636A8.315 8.315 0 0 0 4.136 2.44a8.116 8.116 0 0 0-1.783 2.582 7.927 7.927 0 0 0-.657 3.17c0 1.576.378 3.145 1.119 4.658.596 1.217 1.428 2.402 2.477 3.53 1.793 1.924 3.672 3.1 4.206 3.415a.98.98 0 0 0 1 0c.533-.315 2.413-1.492 4.205-3.416 1.05-1.125 1.882-2.312 2.478-3.529.745-1.51 1.122-3.078 1.122-4.656a7.929 7.929 0 0 0-.656-3.17ZM10 12.3a3.929 3.929 0 1 1 0-7.857 3.929 3.929 0 0 1 0 7.857Z'
        fill={props.color}
      />
    </Svg>
  );
};

export default Location;
