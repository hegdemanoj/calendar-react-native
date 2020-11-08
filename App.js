import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendar  from './components/Calendar';

export default function App() {
  return (
    <View style={styles.container}>
      <Calendar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 100,
    marginLeft:20,
    marginRight:20,
    padding:20,
    // paddingBottom:30,
    // height:'100%',
    // backgroundColor: '#5F9EA0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
  },
});
