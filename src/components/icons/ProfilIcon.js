import * as React from "react"
import Svg, { Circle } from "react-native-svg"
import {View} from 'react-native'

function ProfilIcon(props) {
    return (
        <View>
            <Svg
                {...props}
                width={146}
                height={146}
                viewBox="0 0 146 146"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
            <Circle cx={73} cy={73} r={71.5} stroke="#E5C77A" strokeWidth={3} />
            </Svg>
        </View>
      
    )
}

export default ProfilIcon
