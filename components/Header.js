import React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import MenuIcon from '../assets/menu-icon.png';
import NotificationIcon from '../assets/notification-icon.png';

export default function Header({ user }) {
  return (
    <View style={styles.header}>
      <Pressable>
        <Image source={MenuIcon} resizeMode="contain" style={styles.menuIcon} />
      </Pressable>
      <Text style={styles.greeting}>Hello, {user}.</Text>
      <Pressable>
        <Image
          source={NotificationIcon}
          resizeMode="contain"
          style={styles.notificationIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1e293b',
  },
});
