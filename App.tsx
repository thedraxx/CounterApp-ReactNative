import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {Counter} from './src/screens/Counter';
import {Dimensiones} from './src/screens/Dimensiones';
import {FlexScreen} from './src/screens/FlexScreen';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import {SafeAreaView} from 'react-native';
import React from 'react';
import {TareaScreen} from './src/screens/TareaScreen';

export const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {/* <HolaMundoScreen />
       <Counter /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <Dimensiones /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        <TareaScreen />
      </SafeAreaView>
    </>
  );
};
