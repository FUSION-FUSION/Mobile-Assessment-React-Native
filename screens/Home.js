import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { StatusBar as Bar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import MenuIcon from '../assets/menu-icon.png';
import NotificationIcon from '../assets/notification-icon.png';
import bgBalance from '../assets/bg-dashboard-balance.png';

export default function Home(props) {
  const [user, setUser] = useState('John');
  const [balance, setBalance] = useState('₦ 50,000');

  return (
    <ScrollView style={styles.container}>
      <Bar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <Pressable>
          <Image
            source={MenuIcon}
            resizeMode="contain"
            style={styles.menuIcon}
          />
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
      {/* Balance Summary */}
      <View style={styles.balanceBox}>
        {/* Background Image */}
        <ImageBackground
          source={bgBalance}
          style={styles.balanceBgImage}
          resizeMode="cover"
        />
        <Text style={styles.balanceHeader}>Total Balance</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>{balance}</Text>
          <Pressable style={styles.topUpBtn}>
            <Text style={styles.topUpBtnText}>Top up </Text>
            <Feather name="chevrons-right" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e9ed',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
  },
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
  balanceBox: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 0,
    marginTop: 10,
    overflow: 'hidden',
  },
  balanceHeader: {
    fontSize: 16,
    fontWeight: '400',
    color: '#1e293b',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBotttom: 10,
    paddingHorizontal: 20,
  },
  balance: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1e293b',
  },
  balanceBgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    right: -10,
  },
  topUpBtn: {
    width: 100,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#46a5ba',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  topUpBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
