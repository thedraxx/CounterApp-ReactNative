import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const Dimensiones = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.CajaMorada} />
        <View style={styles.CajaNaranja} />
      </View>
      <Text style={styles.title}>
        W:{width}, H:{height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 600,
  },

  CajaMorada: {
    backgroundColor: '#FF00FF',
    width: '50%',
    height: '50%',
  },
  CajaNaranja: {
    backgroundColor: '#FFA500',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
