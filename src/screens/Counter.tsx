import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter:{counter}</Text>
      {/* Boton inferior Derecho */}
      <Fab title="+1" position="br" onPress={() => setCounter(counter + 1)} />

      {/* Boton inferior izquierdo */}
      <Fab title="-1" position="bl" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: -15,
  },
});
