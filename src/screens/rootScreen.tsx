import FaceList from 'components/FaceList';
import StatusViewController from 'components/StatusViewController';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { LoadingStatus } from 'reducers/facesState';
import { Face } from 'services/facesApi';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export interface RootScreenProps {
  faces: Array<Face>;

  loadFaces(): void;

  loadingStatus: LoadingStatus;
}

export default function RootScreen(props: RootScreenProps): JSX.Element {
  useEffect(() => {
    props.loadFaces();
  }, [])
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusViewController 
          status={props.loadingStatus} 
          onRetry={props.loadFaces}
          renderSuccess={() => <FaceList faces={props.faces}/>}/>
      </SafeAreaView>
    </View>
  );
}
