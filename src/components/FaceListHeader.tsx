import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'services/colors';


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
  },
  text: {
    color: colors.blue,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left'
  }
})

export default function FaceListHeader(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faces</Text>
    </View>
  )
}
