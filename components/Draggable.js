import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { Entypo } from '@expo/vector-icons';

export default function Draggable({ children }) {
  const bottomSheet = useRef();
  useEffect(() => bottomSheet.current.show(), []);

  return (
    <View style={styles.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
        {children}
      </BottomSheet>
      <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheet.current.show()}
      >
        <Text style={styles.text}>View Details </Text>
        <Entypo name="chevron-up" size={20} color="#1e293b" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#333',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    position: 'absolute',
    bottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
