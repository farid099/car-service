import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DateIcon(props) {
return (
    <Svg
    {...props}
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.429 1.286h1.285c.71 0 1.286.575 1.286 1.285v8.143c0 .71-.576 1.286-1.286 1.286H1.286C.576 12 0 11.424 0 10.714V2.571c0-.71.576-1.285 1.286-1.285H2.57V.429a.429.429 0 01.858 0v.857H8.57V.429a.429.429 0 11.858 0v.857zm1.285 9.857a.429.429 0 00.429-.429V5.143H.857v5.571c0 .237.192.429.429.429h9.428zM.857 4.286h10.286V2.57a.429.429 0 00-.429-.428H9.43V3a.429.429 0 11-.858 0v-.857H3.43V3a.429.429 0 11-.858 0v-.857H1.286a.429.429 0 00-.429.428v1.715zM2.571 6h.858a.429.429 0 110 .857H2.57a.429.429 0 110-.857zM6.43 6H5.57a.429.429 0 100 .857h.858a.429.429 0 100-.857zM8.57 6h.858a.429.429 0 010 .857H8.57a.429.429 0 110-.857zM3.43 7.714H2.57a.429.429 0 100 .857h.858a.429.429 0 100-.857zm2.142 0h.858a.429.429 0 110 .857H5.57a.429.429 0 110-.857zm3.858 0H8.57a.429.429 0 100 .857h.858a.429.429 0 100-.857zM2.57 9.43h.858a.429.429 0 110 .857H2.57a.429.429 0 110-.857zm3.858 0H5.57a.429.429 0 100 .857h.858a.429.429 0 100-.857zm2.142 0h.858a.429.429 0 010 .857H8.57a.429.429 0 110-.857z"
        fill="#505056"
    />
    </Svg>
)
}

export default DateIcon