import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={"100%"}
      height={475}
      viewBox="0 0 360 475"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}

    >
      <Path fill="#505056"
      stroke="#E5C77A"
      strokeWidth={4}
      d="M0 0h360v475H0z" />
    </Svg>
  )
}

export default SvgComponent
