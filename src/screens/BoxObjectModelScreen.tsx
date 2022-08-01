import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22ff00',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderWidth: 10,
    // backgroundColor: '#f00',
  },
});
