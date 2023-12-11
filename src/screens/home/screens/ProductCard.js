import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import favorites from "../../../../assets/favorites.png";
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

export default function ProductCard() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {mockItemData.map((pizza, index) => (
          <View key={index} style={styles.productCard}>
            <View>
              <PromoComponent isNew={pizza.isNew} image={pizza.image} />
            </View>
            <View style={styles.mainTextContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{pizza.title}</Text>
                <Image source={favorites} style={styles.favoriteImage} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textNewPrice}>{pizza.textNewPrice}</Text>
                <Text style={styles.textOldPrice}>{pizza.textOldPrice}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textLong} numberOfLines={1}>
                  {pizza.descriptionTitle}
                </Text>
                <View style={styles.position}>
                  <Text style={styles.textTitle}>{pizza.buyText}</Text>
                  <Image source={basket} style={styles.basketImage} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.backgroundColor,
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
    shadowColor: "#000",
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
    fontSize: 20,
    color: colors.mainColor,
  },
  textNewPrice: {
    fontSize: 20,
    color: colors.mainColor,
    fontWeight: "bold",
  },
  textOldPrice: {
    fontSize: 20,
    color: colors.mainColor,
    textDecorationLine: "line-through",
    position: "absolute",
    left: 110,
  },
  textLong: {
    fontSize: 20,
    width: 135,
    color: colors.mainColor,
  },
  favoriteImage: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 240,
  },
  basketImage: {
    width: 20,
    height: 20,
  },
  promotionImage: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 10,
    left: 50,
  },
  position: {
    flexDirection: "row",
    position: "absolute",
    left: 210,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
});
