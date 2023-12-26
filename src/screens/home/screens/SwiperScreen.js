import React from "react";
import Swiper from "react-native-swiper";
import { View, StyleSheet, TouchableOpacity, Image, Share } from "react-native";

const swiperImages = [
  "/Users/React-native/IDEA/samProject/assets/swiper_1.png",
  "/Users/React-native/IDEA/samProject/assets/swiper_2.png",
  "/Users/React-native/IDEA/samProject/assets/swiper_3.png",
  "/Users/React-native/IDEA/samProject/assets/swiper_4.png",
  "/Users/React-native/IDEA/samProject/assets/swiper_5.png",
];

const SwiperComponent = ({ images }) => {
  const handleShare = async (imageUri) => {
    try {
      const result = await Share.share({
        message: "Check out this image!",
        url: imageUri,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared with ${result.activityType}`);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Swiper showsPagination={true}>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleShare(image)}
          style={styles.swiperImageContainer}
        >
          <Image source={{ uri: image }} style={styles.swiperImage} />
        </TouchableOpacity>
      ))}
    </Swiper>
  );
};

const SwiperScreen = () => {
  return (
    <View style={styles.swiperContainer}>
      <SwiperComponent images={swiperImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    height: 250,
  },
  swiperImage: {
    flex: 1,
  },
  swiperImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default SwiperScreen;
