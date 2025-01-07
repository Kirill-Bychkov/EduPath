import { useEffect, useRef, useCallback, useMemo } from "react";
import { getButtonsMenu, getButtonsLevelsMenu, getImagesMenu } from "./dataImageButtonText.jsx";
import { useWindowDimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const useEffectGame = () => {
  const scrollViewRef = useRef(null);
  const windowWidth = useWindowDimensions().width;

  const data = useMemo(() => ({
    buttonsMenu: getButtonsMenu(windowWidth),
    buttonsLevelsMenu: getButtonsLevelsMenu(windowWidth),
    imagesMenu: getImagesMenu(windowWidth),
  }), [windowWidth]);

  const handleScroll = useCallback((event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY < 0) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, []);

  const scrollToEnd = useCallback(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }, 100);
  }, []);

  useEffect(() => {
    scrollToEnd();
  }, [windowWidth]);

  useFocusEffect(scrollToEnd);

  return { data, scrollViewRef, windowWidth, handleScroll };
};
