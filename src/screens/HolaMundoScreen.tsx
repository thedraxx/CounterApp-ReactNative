import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
        Hola Mundo...
      </Text>
    </View>
  );
};
