import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { observer } from "mobx-react";
import basketStore from "../screens/home/components/basketStore";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";

const Footer = () => {
  const navigation = useNavigation();
  const navigateToBasketScreen = () => {
    console.log("Navigating to BasketScreen");
    navigation.navigate("BasketScreen");
  };
  return (
    <SafeAreaView>
      <View
        style={{
          position: 'absolute',
          left: 170,
          top: 555,
        }}
      >
        <TouchableOpacity onPress={navigateToBasketScreen}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="shopping-basket" size={20} />
            {basketStore.basketCount > 0 && (
              <View
                style={{
                  backgroundColor: colors.counterColor,
                  borderRadius: 10,
                  marginLeft: 5,
                  padding: 4,
                }}
              >
                <Text style={{ color: colors.backgroundColor, fontSize: 12 }}>
                  {basketStore.basketCount}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default observer(Footer);
