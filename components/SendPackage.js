import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import { StatusBar as Bar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import Bike from '../assets/bike.png';
import Road1 from '../assets/road-same-state.png';
import Curve from '../assets/curve.png';
import Van from '../assets/van.png';
import Road2 from '../assets/road-interstate.png';
import Truck from '../assets/truck.png';
import Road3 from '../assets/road-charter.png';
import Aeroplane from '../assets/aeroplane.png';

export default function SendPackage(props) {
  return (
    <View style={styles.container}>
      <Bar style="auto" />
      <Text style={styles.heading}>Send a Package</Text>
      {/* Package Destination */}
      <View style={styles.wrapper}>
        {/* Same State */}
        <View style={styles.destination}>
          {/* Road Bg Img */}
          <ImageBackground
            source={Road1}
            style={styles.road}
            resizeMode="cover"
          />
          <Text style={styles.destinationHeader}>Same State</Text>
          <Text style={styles.underline}></Text>
          <Text style={styles.description}>
            Deliveries within the same state
          </Text>
          {/* Bike Img */}
          <Image source={Bike} style={styles.image} resizeMode="contain" />
          <Pressable style={styles.button}>
            <AntDesign name="arrowright" size={14} color="black" />
          </Pressable>
        </View>

        {/* InterState */}
        <View style={styles.destination}>
          {/* Curve Bg Img */}
          <ImageBackground
            source={Curve}
            style={styles.curve}
            resizeMode="contain"
          />
          {/* Road Bg Img */}
          <ImageBackground
            source={Road2}
            style={styles.road}
            resizeMode="cover"
          />
          <Text style={styles.destinationHeader}>Interstate</Text>
          <Text style={styles.underline}></Text>
          <Text style={styles.description}>
            Deliveries outside your current state
          </Text>
          {/* Van Img */}
          <Image source={Van} style={styles.image} resizeMode="contain" />
          <Pressable style={styles.button}>
            <AntDesign name="arrowright" size={14} color="black" />
          </Pressable>
        </View>

        {/* Charter */}
        <View style={styles.destination}>
          {/* Road Bg Img */}
          <ImageBackground
            source={Road3}
            style={styles.road}
            resizeMode="cover"
          />
          {/* Curve Bg Img */}
          <ImageBackground
            source={Curve}
            style={styles.curve}
            resizeMode="contain"
          />
          <Text style={styles.destinationHeader}>Charter</Text>
          <Text style={styles.underline}></Text>
          <Text style={styles.description}>Request a vehicle</Text>
          {/* Truck Img */}
          <Image source={Truck} style={styles.image} resizeMode="contain" />
          <Pressable style={styles.button}>
            <AntDesign name="arrowright" size={14} color="black" />
          </Pressable>
        </View>

        {/* International */}
        <View style={{ ...styles.destination, opacity: 0.6 }}>
          <Text style={styles.destinationHeader}>International</Text>
          <Text style={styles.underline}></Text>
          <Text style={styles.description}>
            Send packages to other countries
          </Text>
          {/* Aeroplane Img */}
          <Image source={Aeroplane} style={styles.aero} resizeMode="contain" />
          <Pressable
            style={{ ...styles.button, width: 80, height: 24 }}
            disabled={true}
          >
            <Text style={{ fontSize: 10 }}>Coming Soon</Text>
          </Pressable>
        </View>
      </View>

      {/* Other Actions */}
      <Text style={styles.heading}>Other Actions</Text>
      <View style={styles.wrapper}>
        {/* Waybill History */}
        <View style={{ ...styles.destination, height: 150 }}>
          <Text style={styles.destinationHeader}>Waybill History</Text>
          <Text style={styles.underline}></Text>
          <Text style={styles.description}>Records of all your waybills</Text>
          <Pressable style={{ ...styles.button, backgroundColor: 'black' }}>
            <AntDesign name="arrowright" size={14} color="white" />
          </Pressable>
        </View>

        {/* Get Help */}
        <View style={{ ...styles.destination, height: 150 }}>
          <Text style={styles.destinationHeader}>Get Help</Text>
          <Text style={styles.underline}></Text>
          <Text style={styles.description}>
            Get help & support from our team
          </Text>
          <Pressable style={{ ...styles.button, backgroundColor: 'black' }}>
            <AntDesign name="arrowright" size={14} color="white" />
          </Pressable>
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
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1e293b',
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  destination: {
    width: 165,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  destinationHeader: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1e293b',
    marginTop: 20,
    marginHorizontal: 10,
  },
  underline: {
    width: '25%',
    height: 1,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#46a5ba',
    borderRadius: 10,
    marginTop: 3,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    color: '#1e293b',
    marginTop: 5,
    marginHorizontal: 10,
  },
  curve: {
    width: '100%',
    height: 40,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  road: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    width: '100%',
    height: 90,
    position: 'absolute',
    left: -35,
    bottom: 10,
  },
  aero: {
    width: '100%',
    height: 120,
    position: 'absolute',
    left: -10,
    bottom: 0,
  },
  button: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#333',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});
