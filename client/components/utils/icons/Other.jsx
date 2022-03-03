import * as React from "react";
import Svg, { Path } from "react-native-svg";
import StyleGuide from "../StyleGuide";

const Other = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 752 752"
            {...props}
        >
            <Path
                d="M438.52 376c0 34.527-27.988 62.516-62.516 62.516-34.523 0-62.512-27.988-62.512-62.516 0-34.523 27.988-62.512 62.512-62.512 34.527 0 62.516 27.988 62.516 62.512M276.07 376c0 34.527-27.984 62.516-62.512 62.516-34.523 0-62.512-27.988-62.512-62.516 0-34.523 27.988-62.512 62.512-62.512 34.527 0 62.512 27.988 62.512 62.512M600.95 376c0 34.527-27.988 62.516-62.512 62.516-34.527 0-62.516-27.988-62.516-62.516 0-34.523 27.988-62.512 62.516-62.512 34.523 0 62.512 27.988 62.512 62.512"
                fill={StyleGuide.colors.secondary}
            />
        </Svg>
    );
};

export default Other;
