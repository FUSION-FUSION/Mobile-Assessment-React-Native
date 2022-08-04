import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CargoDetails(props) {
  return (
    <View style={styles.container}>
      {/* Route */}
      <Text style={styles.header}>Route Details</Text>
      <View style={styles.map}>
        <View style={styles.stations}>
          <Text style={styles.origin}>Pickup</Text>
          <Text style={styles.origin}>Jibawo Terminal</Text>
          <Text style={styles.destination}>Abuja Terminal</Text>
          <Text style={styles.destination}>Collected</Text>
        </View>
        <View style={styles.stations}>
          <Text style={styles.elapsed}></Text>
          <Text style={styles.elapsedRoute}></Text>
          <Text style={styles.elapsed}></Text>
          <Text style={styles.destinationRoute}></Text>
          <Text style={styles.toReach}></Text>
          <Text style={styles.destinationRoute}></Text>
          <Text style={styles.toReach}></Text>
        </View>
        <View style={styles.dates}>
          <Text style={styles.date}>04 Mar, 2022</Text>
          <Text style={styles.date}>05 Mar, 2022</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  map: {
    width: '100%',
    height: 150,
    backgroundColor: '#46a5ba',
    borderRadius: 20,
    padding: 20,
  },
  stations: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  origin: {
    color: 'white',
    fontSize: 13,
  },
  destination: {
    color: '#dcdcde',
    fontSize: 13,
  },
  elapsed: {
    backgroundColor: 'white',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  toReach: {
    backgroundColor: '#dcdcde',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  elapsedRoute: {
    flex: 1,
    height: 2,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
  },
  destinationRoute: {
    flex: 1,
    height: 2,
    backgroundColor: '#dcdcde',
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#dcdcde',
    borderRadius: 1,
  },
  dates: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  date: {
    color: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1e293b',
    marginBottom: 10,
  },
});
