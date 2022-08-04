import React from 'react';
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import bgBalance from '../assets/bg-dashboard-balance.png';

export default function BalanceCard({ balance }) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
