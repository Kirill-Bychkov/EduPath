import { useCallback, useEffect, useRef } from "react";
import { BackHandler } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export const useBackNavigation = (callback) => {
  const navigation = useNavigation();
  const callbackRef = useRef(callback);
  const isSubscribedRef = useRef(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const handleBack = useCallback(() => {
    if (callbackRef.current) {
      callbackRef.current();
      callbackRef.current = null;

      return true;
    }
    return false;
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (isSubscribedRef.current) return;

      isSubscribedRef.current = true;
      
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBack
      );

      const unsubscribeGesture = navigation.addListener("gestureEnd", (e) => {
        if (e.data.closing) handleBack();
      });

      return () => {
        isSubscribedRef.current = false;
        backHandler.remove();
        unsubscribeGesture();
      };
    }, [handleBack, navigation])
  );
};
