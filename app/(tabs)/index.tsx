import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import { Image } from "expo-image";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <Text style={styles.text}>This is the Home Page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  },
  imageContainer: {
    flex: 1
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
});
