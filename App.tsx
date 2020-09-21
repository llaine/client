import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Face, getFaces } from 'services/faces';

export default function App() {
  const [faces, setFaces] = useState<Array<Face>>([]);
  useEffect(() => {
    getFaces()
      .then((result) => {
        setFaces(result);
      })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={faces}
        renderItem={(item) =>
          <View>
            <Text>{item.item.name}</Text>
          </View>
        }
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
