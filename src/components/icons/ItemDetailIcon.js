import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ItemDetailIcon(props) {
  return (
    <Svg
        {...props}
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
    <Circle cx={7} cy={7} r={7} fill="#E5C77A" />
    <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.146 9.853a.5.5 0 010-.708L9.793 6.5 7.146 3.853a.5.5 0 01.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z"
        fill="#fff"
    />
    <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 6.5a.5.5 0 01-.5.5H3.5a.5.5 0 110-1H10a.5.5 0 01.5.5z"
        fill="#fff"
    />
    </Svg>
)
}

export default ItemDetailIcon
