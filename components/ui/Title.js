import { Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/color';


export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12
  }
});
