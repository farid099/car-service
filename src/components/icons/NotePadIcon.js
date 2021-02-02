import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
    width={25}
    height={23}
    viewBox="0 0 25 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1h21a1 1 0 011 1v19a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zM0 2a2 2 0 012-2h21a2 2 0 012 2v19a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm2.976 2.51H21.43v-1H2.976v1zM21.43 8.118H2.976v-1H21.43v1zM2.976 11.725H21.43v-1H2.976v1zm18.453 3.608H2.976v-1H21.43v1zM2.976 18.941H21.43v-1H2.976v1z"
      fill="#E5C77A"
    />
  </Svg>
  )
}

export default SvgComponent
