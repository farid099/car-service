import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusIcon(props) {
  return (
    <Svg
      {...props}
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.566 7.828H.031V5.262h4.535V.692h2.567v4.57h4.535v2.566H7.133v4.512H4.566V7.828z"
        fill="#E5C77A"
      />
    </Svg>
  )
}

export default PlusIcon
