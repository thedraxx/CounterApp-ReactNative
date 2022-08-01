import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0062ff',
    flex: 1,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  caja1: {
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
    // alignSelf: 'center',
  },
  caja2: {
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
  },
  caja3: {
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
  },
});
