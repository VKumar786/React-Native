import React from 'react';
import {
  Button,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function AlbumList({
  title,
  price,
  thumbnail,
}: {
  title: string;
  price: number;
  thumbnail: string;
}): React.JSX.Element {
  const {container, productImage, profileContainer, profileImage} = styles;

  return (
    <SafeAreaView style={container}>
      <View style={profileContainer}>
        <Image
          resizeMode={'cover'}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/142484106?s=400&u=549b8a7c24873174302743b451c673af2d35295b&v=4',
          }}
          style={profileImage}
        />
        <View>
          <Text style={{color: '#262626'}}>{title}</Text>
          <Text>Rs. {price}</Text>
        </View>
      </View>
      <View>
        <Image
          resizeMode={'cover'}
          source={{uri: thumbnail}}
          style={productImage}
        />
      </View>
      <View>
        <Button
          title="Buy Now"
          onPress={() => {
            Linking.openURL(
              'https://www.amazon.in/Saregama-Carvaan-Subbulakshmi-Pre-Loaded-Bluetooth/dp/B0C8Z2KSSB/ref=sr_1_2?keywords=song&qid=1707061725&sr=8-2',
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#dddddd',
    marginTop: 5,
    marginBottom: 5,
    padding: 7,
    borderRadius: 7,
  },
  productImage: {
    height: 200,
    marginTop: 5,
    marginBottom: 5,
  },
  profileImage: {
    display: 'flex',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});

export default AlbumList;
