import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {Counter} from './src/screens/Counter';
import {Dimensiones} from './src/screens/Dimensiones';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {PositionScreen} from './src/screens/PositionScreen';

export const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {/* <HolaMundoScreen />
       <Counter /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <Dimensiones /> */}
        <PositionScreen />
      </SafeAreaView>
    </>
  );
};
