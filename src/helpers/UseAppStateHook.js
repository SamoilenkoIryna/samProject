import React, { useEffect, useState } from "react";
import { AppState, Image, View, Text } from "react-native";
import ooops from "../../assets/ooops.png";

const useAppState = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  const handleAppStateChange = (nextAppState) => {
    setAppState(nextAppState);
  };

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    setAppState(AppState.currentState);

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};

const UseAppStateHook = () => {
  const appState = useAppState();

  return (
    <View>
      {appState !== "active" && (
        <Image source={ooops} style={{ width: 400, height: 700 }} />
      )}
      <Text style={{ position: "absolute", top: 30 }}>
        Current App State: {appState}
      </Text>
    </View>
  );
};

export default UseAppStateHook;
