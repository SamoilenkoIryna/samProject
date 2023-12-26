import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const swiperImage = require("../../../../assets/swiper_4.png");

const PizzaScreen = ({ route }) => {
  const { productId } = route.params;

  return (
    <View style={styles.container}>
       <Text>{`Product ID: ${productId}`}</Text>
      <Image source={swiperImage} style={styles.pizzaImage} />
      <Text style={styles.title}>
        Margherita Pizza 
      </Text>
      <Text style={styles.description1}>
        The Margherita pizza is a classic Italian pizza that
        embodies simplicity and deliciousness. Named after Queen Margherita of
        Savoy, this pizza is a true representation of the colors of the Italian
        flag: red, white, and green. 
      </Text>
      <Text style={styles.ingredients}>
        Ingredients: Pizza Dough: A thin and airy
        crust made from a simple mixture of flour, water, yeast, salt, and a
        touch of olive oil. San Marzano Tomatoes: The sauce is crafted from the
        finest San Marzano tomatoes, known for their sweetness and low acidity.
        Fresh Mozzarella Cheese: Creamy and milky fresh mozzarella cheese is
        evenly distributed across the pizza, adding a rich and satisfying
        texture. Basil Leaves: A sprinkle of fresh basil leaves provides a burst
        of aromatic flavor and a touch of vibrant green, enhancing the pizza's
        visual appeal. Extra Virgin Olive Oil: A drizzle of high-quality extra
        virgin olive oil completes the Margherita pizza, adding a luxurious
        finish.
      </Text>
      <Text style={styles.description}>
        Description: The Margherita pizza is a culinary masterpiece that
        lets the quality of its ingredients shine. The crust, thin and crispy,
        serves as the perfect canvas for the vibrant red of the tomato sauce,
        the pure white of the mozzarella, and the lively green of the basil. The
        tomatoes, selected for their natural sweetness, create a luscious base,
        while the fresh mozzarella melts into gooey perfection. Each bite is a
        harmonious blend of flavors — the earthiness of basil, the creaminess of
        cheese, and the slight tanginess of tomatoes. Finished with a drizzle of
        extra virgin olive oil, the Margherita pizza is a timeless classic that
        captures the essence of Italian culinary artistry.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pizzaImage: {
    width: 130,
    height: 130,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  description1: {
    marginTop: 10,
    fontSize: 12,
    marginLeft: 10,
  },
  ingredients: {
    marginTop: 10,
    fontSize: 12,
    marginLeft: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 12,
    marginLeft: 10,
  },
});

export default PizzaScreen;
