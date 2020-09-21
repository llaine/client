import FaceItem from 'components/FaceItem';
import FaceListHeader from 'components/FaceListHeader';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Face } from 'services/facesApi';

export interface FaceListProps {
  faces: Array<Face>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  }
});

export default function FaceList({ faces }: FaceListProps): JSX.Element {
  return (
    <FlatList
      style={styles.container}
      data={faces}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={<FaceListHeader />}
      renderItem={({ item }) => <FaceItem face={item}/>}
    />
  )
}
