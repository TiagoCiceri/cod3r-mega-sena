import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Mega from './src/componentes/Mega';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Mega qtdeNumeros={6} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999cb9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

