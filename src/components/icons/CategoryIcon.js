import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CategoryIcon(props) {
return (
    <Svg
    {...props}
    width={12}
    height={9}
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H2v1.286h10V0zm0 2.571H2v1.286h10V2.571zM2 5.143h10v1.286H2V5.143zm10 2.571H2V9h10V7.714zM0 2.571h1v1.286H0V2.571zm1 2.572H0v1.286h1V5.143zM0 7.714h1V9H0V7.714zM1 0H0v1.286h1V0z"
        fill="#505056"
    />
    </Svg>
)
}

export default CategoryIcon
