import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  const Press = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          top: -10,
        }}>
        Counter:
        {counter}
      </Text>
      <Button title="Click" onPress={Press} />
    </View>
  );
};
