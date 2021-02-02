import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.479 8.096h7.242v2.425h-7.242v7.489H8.035V10.52H.828V8.096h7.207V.572h2.444v7.524z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
