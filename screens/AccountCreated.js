import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function AccountCreated({ navigation, loginUser }) {
  return (
    <View style={styles.container}>
      <Text>Congratulations! Your account has been created</Text>
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
});
