import MapView from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TrackingScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default TrackingScreen;