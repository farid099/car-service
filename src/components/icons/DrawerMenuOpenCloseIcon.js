import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DrawerMenuOpenCloseIcon(props) {
  return (
    <Svg
        {...props}
        width={23}
        height={13}
        viewBox="0 0 23 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
    <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1a1 1 0 011-1h18a1 1 0 011 1v1a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm0 5a1 1 0 011-1h15a1 1 0 011 1v1a1 1 0 01-1 1H1a1 1 0 01-1-1V6zm1 4a1 1 0 00-1 1v1a1 1 0 001 1h21a1 1 0 001-1v-1a1 1 0 00-1-1H1z"
        fill="#E5C77A"
    />
        </Svg>
    )
}

export default DrawerMenuOpenCloseIcon
