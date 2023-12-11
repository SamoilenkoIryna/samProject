import React, { useState } from "react";
import Swiper from "react-native-swiper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Share,
} from "react-native";
import favorites from "../../../../assets/favorites.png";
import search from "../../../../assets/search.png";
import basket from "../../../../assets/basket.png";
import promotion from "../../../../assets/promotion.png";
import colors from "../../../styles/colors";
import mockItemData from "../mock/mockItemData";

const PromoComponent = ({ isNew, image }) => {
  return (
    <View style={styles.textContainer}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      {isNew && <Image source={promotion} style={styles.promotionImage} />}
    </View>
  );
};

const SwiperComponent = ({ images }) => {
  const handleShare = async (imageUri) => {
    try {
      const result = await Share.share({
        message: 'Check out this image!',
        url: imageUri,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared with ${result.activityType}`);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
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

const renderItem = ({ item }) => (
  <View style={styles.productCard} key={item.id}>
    <View>
      <PromoComponent isNew={item.isNew} image={item.image} />
    </View>
    <View style={styles.mainTextContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Image source={favorites} style={styles.favoriteImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textNewPrice}>{item.textNewPrice}</Text>
        <Text style={styles.textOldPrice}>{item.textOldPrice}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textLong} numberOfLines={1}>
          {item.descriptionTitle}
        </Text>
        <View style={styles.position}>
          <Text style={styles.textTitle}>{item.buyText}</Text>
          <Image source={basket} style={styles.basketImage} />
        </View>
      </View>
    </View>
  </View>
);

export default function ProductList() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState(mockItemData);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setSearchVisible(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    setFilterText("");
  };

  const handleFilterChange = (text) => {
    setFilterText(text);
    filterData(text);
  };

  const filterData = (text) => {
    const filtered = mockItemData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const swiperImages = [
    "/Users/React-native/IDEA/samProject/assets/swiper_1.png",
    "/Users/React-native/IDEA/samProject/assets/swiper_2.png",
    "/Users/React-native/IDEA/samProject/assets/swiper_3.png",
    "/Users/React-native/IDEA/samProject/assets/swiper_4.png",
    "/Users/React-native/IDEA/samProject/assets/swiper_5.png",
  ];

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        {isSearchVisible && (
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={handleFilterChange}
            value={filterText}
          />
        )}
        <View style={styles.rightPosition}>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={favorites} style={styles.favoriteButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleSearch}>
            <Image source={search} style={styles.searchButton} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
      />
      {isModalVisible && (
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={toggleModal}
          />
          <View style={styles.swiperContainer}>
            <SwiperComponent images={swiperImages} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    left: 10,
  },
  input: {
    width: "80%",
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    paddingLeft: 10,
  },
  productCard: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 10,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    elevation: 5,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  mainTextContainer: {
    width: 90,
    paddingHorizontal: 10,
    justifyContent: "space-around",
  },
  textContainer: {
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 18,
    color: colors.mainColor,
  },
  textNewPrice: {
    fontSize: 18,
    color: colors.mainColor,
    fontWeight: "bold",
  },
  textOldPrice: {
    fontSize: 18,
    color: colors.mainColor,
    textDecorationLine: "line-through",
    position: "absolute",
    left: 110,
  },
  textLong: {
    fontSize: 18,
    width: 135,
    color: colors.mainColor,
  },
  favoriteImage: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 240,
  },
  favoriteButton: {
    width: 23,
    height: 23,
  },
  searchButton: {
    width: 25,
    height: 25,
  },
  basketImage: {
    width: 20,
    height: 20,
  },
  promotionImage: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 10,
    left: 60,
  },
  position: {
    flexDirection: "row",
    position: "absolute",
    left: 210,
  },
  rightPosition: {
    flexDirection: "row",
    position: "absolute",
    left: 310,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 10,
    paddingBottom: 10,
  },
  flatList: {
    marginTop: 50,
    backgroundColor: colors.backgroundColor,
  },
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 1,
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.modalBackgroundColor,
  },
  modalContent: {
    backgroundColor: colors.backgroundColor,
    padding: 153,
    borderRadius: 10,
  },
  swiperContainer: {
    height: 250,
  },
  swiperImage: {
    flex: 1,
  },
  swiperImageContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
});
