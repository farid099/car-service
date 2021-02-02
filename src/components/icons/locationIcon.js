import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationIcon(props) {
  return (
    <Svg
      {...props}
      width={10}
      height={15}
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5 7.036c.993 0 1.798-.832 1.798-1.857C6.798 4.153 5.993 3.32 5 3.32s-1.798.832-1.798 1.858c0 1.025.805 1.857 1.798 1.857z"
        stroke="#E5C77A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.597 7.036C7.248 10.286 5 14 5 14s-2.248-3.714-3.597-6.964C.054 3.786 2.303 1 5 1c2.698 0 4.946 2.786 3.597 6.036z"
        stroke="#E5C77A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LocationIcon
