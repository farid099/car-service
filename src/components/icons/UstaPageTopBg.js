import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={"100%"}
      height={291}
      viewBox="0 0 360 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M526 104.5c0 50.409-38.102 96.503-100.726 130.113C362.733 268.178 276.196 289 180.5 289S-1.733 268.178-64.274 234.613C-126.898 201.003-165 154.909-165 104.5c0-50.409 38.102-96.503 100.726-130.113C-1.733-59.178 84.804-80 180.5-80s182.233 20.822 244.774 54.387C487.898 7.997 526 54.09 526 104.5z"
        fill="#505056"
        stroke="#E5C77A"
        strokeWidth={4}
      />
    </Svg>
  )
}

export default SvgComponent
