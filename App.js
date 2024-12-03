import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Veri Jhuandes Pratama</Text>
      <View style={styles.boxContainer}>
        <View style={styles.boxLeft}></View>
        <View style={styles.boxRight}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Warna abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  boxLeft: {
    backgroundColor: 'green', // Warna bebas
    width: 100,
    height: 100,
  },
  boxRight: {
    backgroundColor: 'red', // Warna bebas
    width: 100,
    height: 100,
  },
});
