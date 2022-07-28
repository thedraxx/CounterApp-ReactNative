import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

// Definimos los props que va a recibir el componente
interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  fabLocationBR: {
    position: 'absolute',
    bottom: 15,
    right: 0,
  },

  fabLocationBL: {
    position: 'absolute',
    bottom: 15,
    left: 0,
  },

  fab: {
    backgroundColor: '#9151ff',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
