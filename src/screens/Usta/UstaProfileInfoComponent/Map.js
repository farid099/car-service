import React,{useState} from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native'

const Map = (props) => {


    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE = props.LATITUDE;
    const LONGITUDE = props.LONGITUDE;
    const LATITUDE_DELTA = 0.0952;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const initialValue = {
        latitude : LATITUDE,
        longitude : LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    const [region, setRegion] = useState(initialValue)



    const onRegionChange = (param) => {
        setRegion(param)
    }
    

    return (
    <View style={styles.container}>
        <MapView
        mapType="terrain"
        showsScale = {true}
        zoomEnabled = {true}
        region={region}
        onRegionChange={onRegionChange}
        style={styles.map} />
    </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: "100%",
        height: '100%',

        // width: Dimensions.get('screen').width,
        // height: Dimensions.get('screen').height,
    },
})
