import MapView from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions, Pressable, TextInput } from 'react-native';

const TrackingScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 5.476310,
                    longitude: 7.025853,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.02}}>
                <View style={styles.searchContainer}>
                    <Pressable style={styles.backicon}></Pressable>
                    <View style={styles.mapsearch}><Text style={styles.maptext}>HH-INT-D9FD900-JBW-ORI</Text></View>
                </View>

            </MapView>


            <View style={styles.routeModal}>
                <View></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  backicon: {
     backgroundColor: "#ffffff",
     height: 44,
     width: 46,
     borderRadius: 17
  },
  map: {
    width: Dimensions.get('window').width,
    height: 800,
  },
  mapsearch: {
    backgroundColor: "#ffffff",
    height: 44,
    width: 188
  },
});

export default TrackingScreen;