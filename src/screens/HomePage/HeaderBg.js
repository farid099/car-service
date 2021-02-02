import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeaderBg({props}) {
  return (
    <Svg
        width="100%"
        height={309}
        viewBox="0 0 360 309"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
    <Path
        d="M517 122.5c0 50.409-38.102 96.503-100.726 130.113C353.733 286.178 267.196 307 171.5 307s-182.233-20.822-244.774-54.387C-135.898 219.003-174 172.909-174 122.5c0-50.409 38.102-96.504 100.726-130.113C-10.733-41.178 75.804-62 171.5-62S353.733-41.178 416.274-7.613C478.898 25.997 517 72.09 517 122.5z"
        fill="#505056"
        stroke="#E5C77A"
        strokeWidth={4}
        />
    </Svg>
  )
}

export default HeaderBg


