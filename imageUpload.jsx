import React, { useState } from 'react';
import { StyleSheet, View, Button} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgrondColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBar: {
    color: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth : 2,
    borderColor: 'black',
    padding: 15,
    borderRadius: 10
  },

  image: {
    width:120,
    height: 100,
    margin: 20
  },
});

const PickImage = () => {{
    const [image, setImage] = useState(null);
    const fetchImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,});

    if (!result.cancelled) {
      setImage(result.uri)}};

return(<View><Button title="Pick an image from camera roll" onPress={fetchImage} />
    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}</View>)
}};

export default PickImage;