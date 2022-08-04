import React, { useState } from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import SearchIcon from '../assets/search-icon.png';

export default function TrackCard({ navigation }) {
  const [trackingId, setTrackingId] = useState('');
  const track = () => {
    // Tracking Id must be provided
    if (!trackingId) {
      alert('Please provide waybill number');
      return;
    }

    // navigate to Tracking screen
    // Passing in trackingId as route parameter
    navigation.navigate('track-package', { trackingId });
  };

  return (
    <View style={styles.trackBox}>
      <Text style={styles.trackHeader}>Track your waybill</Text>
      <View style={styles.trackField}>
        <Image
          source={SearchIcon}
          resizeMode="contain"
          style={styles.searchIcon}
        />
        <TextInput
          value={trackingId}
          onChangeText={setTrackingId}
          placeholder="Waybill Number"
          style={styles.inputBox}
        />
        <Pressable onPress={track} style={styles.button}>
          <Text style={styles.buttonText}>Track</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  trackBox: {
    width: '100%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 0,
    marginTop: 30,
    overflow: 'hidden',
  },
  trackHeader: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1e293b',
    marginHorizontal: 20,
  },
  trackField: {
    width: '85%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#46a5ba',
    padding: 1,
    marginHorizontal: 20,
    marginTop: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  inputBox: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#1e293b',
  },
  button: {
    width: 80,
    height: '100%',
    flexDirection: 'row',
    backgroundColor: '#46a5ba',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
