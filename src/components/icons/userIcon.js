import * as React from "react"
import Svg, { Mask, Path } from "react-native-svg"

function UserIcon(props) {
  return (
    <Svg
      {...props}
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask id="prefix__a" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.857 2.143a2.143 2.143 0 114.286 0V3.57A2.145 2.145 0 015 5.714a2.145 2.145 0 01-2.143-2.143V2.143zm3.684 4.304l1.52.507A2.83 2.83 0 0110 9.643c0 .197-.16.357-.357.357H.357A.357.357 0 010 9.643a2.83 2.83 0 011.938-2.69l1.52-.506a.357.357 0 01.113-.018H6.43c.038 0 .076.006.112.018z"
        />
      </Mask>
      <Path
        d="M7.143 3.571h.5-.5zM5 5.714v.5-.5zM2.857 3.571h-.5.5zm5.205 3.383l-.158.474.158-.474zm-1.52-.507l-.16.474h.001l.158-.474zM10 9.643h-.5.5zm-10 0h.5H0zm1.938-2.69l.158.475-.158-.474zm1.52-.506l.159.474-.158-.474zm.113-.018v-.5.5zm2.858 0v-.5.5zM4.999-.5a2.643 2.643 0 00-2.642 2.643h1C3.357 1.236 4.093.5 5 .5v-1zm2.644 2.643A2.643 2.643 0 005-.5v1c.907 0 1.643.736 1.643 1.643h1zm0 1.428V2.143h-1V3.57h1zM5 6.214a2.645 2.645 0 002.643-2.642l-1-.001c-.001.907-.736 1.642-1.644 1.643l.001 1zM2.357 3.572A2.645 2.645 0 005 6.214l.001-1a1.645 1.645 0 01-1.643-1.643h-1zm0-1.43v1.43h1v-1.43h-1zM8.22 6.48L6.7 5.973l-.317.948 1.52.507.317-.948zm2.28 3.163A3.33 3.33 0 008.22 6.48l-.316.95A2.33 2.33 0 019.5 9.641l1 .001zm-.857.857a.857.857 0 00.857-.857h-1c0-.079.064-.143.143-.143v1zm-9.286 0h9.286v-1H.357v1zM-.5 9.643c0 .473.384.857.857.857v-1c.079 0 .143.064.143.143h-1zm2.28-3.164A3.33 3.33 0 00-.5 9.643h1a2.33 2.33 0 011.596-2.215L1.78 6.48zm1.52-.506l-1.52.507.316.948 1.52-.507-.316-.948zm.27-.044a.857.857 0 00-.27.044l.318.948a.143.143 0 01-.045.008l-.003-1zm2.859 0H3.57v1H6.43v-1zm.272.044a.857.857 0 00-.271-.044l-.003 1a.143.143 0 01-.045-.008l.319-.948z"
        fill="#E5C77A"
        mask="url(#prefix__a)"
      />
    </Svg>
  )
}

export default UserIcon
