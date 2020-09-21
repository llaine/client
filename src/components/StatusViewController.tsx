import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { LoadingStatus } from 'reducers/facesState';


interface StatusViewControllerProps {
  status: LoadingStatus;

  onRetry(): void;

  renderSuccess(): JSX.Element;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
});

export default function StatusViewController(props: StatusViewControllerProps): JSX.Element {
  const { status, onRetry, renderSuccess } = props;

  function renderDefaultError() {
    return (
      <View style={styles.container}>
        <Text>Something went wrong</Text>
        <Button title={'Try Again'} onPress={() => onRetry()}/>
      </View>
    )
  }

  function renderDefaultLoading() {
    return (
      <View style={styles.container}>
        <ActivityIndicator testID={'activityIndicator'}/>
      </View>
    )
  }

  function defaultRenderEmpty() {
    return (
      <View style={styles.container}>
        <Text>Nothing to see here!</Text>
      </View>
    )
  }

  switch (status) {
    case 'success':
      return renderSuccess();
    case 'error':
      return renderDefaultError();
    case 'loading':
      return renderDefaultLoading();
    default:
      return defaultRenderEmpty();
  }

}
