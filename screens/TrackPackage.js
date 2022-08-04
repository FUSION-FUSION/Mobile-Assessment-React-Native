import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Pressable,
} from 'react-native';
import MapView from 'react-native-maps';
import { StatusBar as Bar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

export default function TrackPercel({ route, navigation }) {
  // Get the tracking Id
  const { trackingId } = route.params;
  const [packageDetails, setPacakgeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get package details from backend on mount
  useEffect(() => {
    setIsLoading(true);
    // fetch details using trackingId
    // ...
    setPacakgeDetails({
      location: [6.5342216, 3.3164759],
    }); // Assuming we got this server response
    setIsLoading(false);
  }, [trackingId]);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Bar style="auto" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: packageDetails.location[0],
          longitude: packageDetails.location[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.nav}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <AntDesign name="arrowleft" size={24} color="#1e293b" />
        </Pressable>
        <View style={styles.package}>
          <Text style={styles.text}>{trackingId}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  nav: {
    position: 'absolute',
    top: 50,
    left: 30,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backBtn: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 20,
    elevation: 10,
    shadowColor: '#333',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  package: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 10,
    shadowColor: '#333',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
    color: '#1e293b',
  },
});
