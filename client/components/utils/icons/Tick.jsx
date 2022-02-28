import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBack = (props) => {
    return (
        <Svg
            width={19}
            height={13}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="m1 6.71 5.645 5.645M6.677 12.323 18 1"
                stroke="#EBBB6E"
                strokeLinecap="round"
            />
        </Svg>
    );
};

export default ArrowBack;
