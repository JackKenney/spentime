import * as React from 'react';
import { StyleSheet } from 'react-native';
import Selector from '../components/Selector';

import { Text, View } from '../components/Themed';

export default function TimeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Selector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
