import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SignOutIcon(props) {
  return (
    <Svg
      {...props}
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.547 14.81a.82.82 0 01-1.252 1.06L.193 11.03a.824.824 0 010-1.06l4.102-4.84a.82.82 0 111.252 1.06L2.59 9.68h14.562a.82.82 0 110 1.64H2.59l2.957 3.49zM20.18 0h-7.13a.82.82 0 100 1.64h6.31v17.72h-6.31a.82.82 0 100 1.64h7.13a.82.82 0 00.82-.82V.82a.82.82 0 00-.82-.82z"
        fill="#505056"
      />
    </Svg>
  )
}

export default SignOutIcon
