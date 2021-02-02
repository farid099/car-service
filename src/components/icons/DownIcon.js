import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownIcon(props) {
return (
    <Svg
    {...props}
    width={6}
    height={4}
    viewBox="0 0 6 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <Path d="M.636 0L3 2.6 5.364 0 6 .7 3 4 0 .7.636 0z" fill="#505056" />
    </Svg>
)
}

export default DownIcon
