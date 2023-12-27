import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from "react-native";
import favorites from "../../../../assets/favorites.png";
import search from "../../../../assets/search.png";
import basket from "../../../../assets/basket.png";
import promotion from "../../../../assets/promotion.png";
import colors from "../../../styles/colors";
import mockItemData from "../mock/mockItemData";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../../components/Footer";

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

const ProductList = () => {
  const navigation = useNavigation();

  const [isSearchVisible, setSearchVisible] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      key={item.id}
      onPress={() => {
        console.log("Navigating to PizzaScreen");
        navigation.navigate("PizzaScreen", { productId: item.id });
      }}
    >
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
      <View></View>
    </TouchableOpacity>
  );

  const navigateToSwiperScreen = () => {
    console.log("Navigating to SwiperScreen");
    navigation.navigate("SwiperScreen");
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
    setFilteredData(filtered.slice(0, pageNumber * 10));
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPageNumber(1);
    setLoadingMore(false);
    const newData = mockItemData.slice(0, 10);
    setFilteredData(newData);
    setRefreshing(false);
  };

  const onEndReached = () => {
    if (pageNumber * 10 < mockItemData.length && !loadingMore) {
      setLoadingMore(true);
      setPageNumber(pageNumber + 1);
      setTimeout(() => {
        const newData = mockItemData.slice(0, pageNumber * 10 + 5);
        setFilteredData(newData);
        setLoadingMore(false);
      }, 1000);
    } else if (pageNumber * 10 >= mockItemData.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        const remainingData = mockItemData.slice(0, pageNumber * 10 + 5);
        setFilteredData(remainingData);
        setLoadingMore(false);
      }, 1000);
    }
  };

  const onIndexChanged = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const newData = mockItemData.slice(0, pageNumber * 10);
    setFilteredData(newData);
  }, []);

  return (
    <View>
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
          <TouchableOpacity onPress={navigateToSwiperScreen}>
            <Image source={favorites} style={styles.favoriteButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleSearch}>
            <Image source={search} style={styles.searchButton} />
          </TouchableOpacity>
        </View>
        <View>
        <Footer />
        </View>
      </View>
      <FlatList
        ref={flatListRef}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          onIndexChanged(index);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
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
    marginVertical: 30,
    marginLeft: 5,
    marginRight: 5,
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
});

export default ProductList;
