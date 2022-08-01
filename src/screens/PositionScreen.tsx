import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0091ff',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#9d00ff',
    borderWidth: 10,
    borderColor: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#ff7b00',
    borderWidth: 10,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    backgroundColor: '#00ff59',
    borderWidth: 10,
    borderColor: '#fff',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
