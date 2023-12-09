import { StyleSheet, Text, View, Image } from "react-native";
import favorites from '../../../../assets/favorites.png';
import basket from '../../../../assets/basket.png';
import promotion from '../../../../assets/promotion.png';


const mockItemData = {
  title: "Pizza 1",
  textNewPrice: "100.00",
  textOldPrice: "150.00",
  buyText: "Buy",
  descriptionTitle: "Pizza has three main elements: crust, sauce, and toppings. All of them have a variety of preparation methods. Crust: Traditional pizza crust is similar to bread dough. It's a combination of flour, water, yeast, sugar, salt, and oil.",
  image:
    "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
};
 
const PromoComponent = ({ isNew }) => {
  return (
    <View style={styles.textContainer}>
       <Image
          style={styles.image}
          source={{
            uri: mockItemData.image,
          }}
        />
      {isNew && (
        <Image
        source={promotion}
        style={styles.promotionImage}
      />
      )}
    </View>
  )
}

export default function ProductCard() {
  return (
    <View style={styles.container}>
      <View style={styles.productCard}>
        <View>
        <PromoComponent isNew={true} />
        </View>
        <View style={styles.mainTextContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{mockItemData.title}</Text>
            <Image
              source={favorites}
              style={styles.favoriteImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textNewPrice}>{mockItemData.textNewPrice}</Text>
            <Text style={styles.textOldPrice}>{mockItemData.textOldPrice}</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.textLong} numberOfLines={1}>
            {mockItemData.descriptionTitle}
          </Text>
          <View style={styles.position}>
          <Text style={styles.textTitle}>{mockItemData.buyText}</Text>
          <Image
              source={basket}
              style={styles.basketImage}
            />
          </View>
          </View>        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-around",
  },
  productCard: {
    width: "100%",
    height: "25%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  mainTextContainer: {
    width: 100,
    paddingHorizontal: 10,
    justifyContent: "space-around",
  },
  textContainer: {
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 20,
    color: "black",
  },
  textNewPrice: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  textOldPrice: {
    fontSize: 20,
    color: "black",
    textDecorationLine: 'line-through',
    position: 'absolute',
    left: 90,
  },
  textLong: {
    fontSize: 20,
    width: 135,
    color: "black",
  },
  favoriteImage: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 170,
  },
  basketImage: {
    width: 20,
    height: 20,
  },
  promotionImage: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 110,
  },
  position: {
    flexDirection: 'row',
    position: 'absolute',
    left: 140,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: "cover",
    marginTop: 10,
    alignItems: "flex-start",
  },
});
