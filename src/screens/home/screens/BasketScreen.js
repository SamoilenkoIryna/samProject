import React from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { observer } from "mobx-react";
import basketStore from "../components/basketStore";
import mockItemData from "../mock/mockItemData";

const BasketScreen = () => {
  const handleRemoveItem = (itemIndex) => {
    basketStore.removeBasketItem(itemIndex);
  };

  const handleClearBasket = () => {
    basketStore.clearBasket();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={basketStore.orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const pizzaInfo = mockItemData.find((pizza) => pizza.id === item.id);

          return (
            <View style={styles.itemContainer}>
              <Image source={{ uri: pizzaInfo.image }} style={styles.itemImage} />
              <Text style={styles.itemText}>{pizzaInfo.title} - ${pizzaInfo.textNewPrice}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(index)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
       <View style={styles.footer}>
       <Text style={styles.basketCountText}>
        Number of items in basket: {basketStore.basketCount}
      </Text>
        <Text style={styles.totalText}>Total: ${basketStore.calculateTotal() ? basketStore.calculateTotal().toFixed(2) : 0}</Text>
        <Button title="Submit Basket" onPress={handleClearBasket} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  basketCountText: {
    position: "absolute",
    top: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  totalText: {
    marginTop:17,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default observer(BasketScreen);
