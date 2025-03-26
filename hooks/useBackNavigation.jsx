import { useEffect } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const useBackNavigation = (callback) => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleBack = () => {
      if (callback) {
        callback();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack
    );

    const unsubscribeGesture = navigation.addListener("gestureEnd", (e) => {
      if (e.data.closing) {
        handleBack();
      }
    });

    return () => {
      backHandler.remove();
      unsubscribeGesture();
    };
  }, [callback, navigation]);
};
