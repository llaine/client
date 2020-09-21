import React from 'react';
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import colors from 'services/colors';
import { Face } from 'services/facesApi';

export interface FaceItemProps {
  face: Face
}

interface styles {
  container: ViewStyle,
  image: ImageStyle,
  nameText: TextStyle,
  idText: TextStyle,
  textContainer: ViewStyle
}

const styles = StyleSheet.create<styles>({
  container: {
    alignItems: 'center',
    borderColor: colors.white,
    borderRadius: 12,
    borderWidth: 0.3,
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  idText: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: 'bold'
  },
  image: {
    borderRadius: 100 / 2,
    height: 80,
    width: 80
  },
  nameText: {
    fontSize: 16,
  },
  textContainer: {
    paddingHorizontal: 12,
  }
});

export default function FaceItem({ face }: FaceItemProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image style={styles.image} testID={`image-${face.id.toString()}`} source={{ uri: face.avatar }}/>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{face.name}</Text>
        <Text style={styles.idText}>{face.id}</Text>
      </View>
    </View>
  )
}
