import { useEffect, useRef, useCallback, useMemo } from "react";
import { getButtonsData, getLevelsData, getImagesMenuData } from "./DataImage.jsx";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const useEffectGame = () => {
  const scrollViewRef = useRef(null);
  const router = useRouter();
  const windowWidth = useWindowDimensions().width;

  const data = useMemo(() => ({
    buttonsData: getButtonsData(router, windowWidth),
    levelsData: getLevelsData(windowWidth),
    imagesMenuData: getImagesMenuData(windowWidth),
  }), [router, windowWidth]);

  const handleScroll = useCallback((event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY < 0) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, []);

  const scrollToEnd = useCallback(() => {
    scrollViewRef.current?.scrollToEnd({ animated: false });
  }, []);

  useEffect(() => {
    scrollToEnd();
  }, [data]);

  useFocusEffect(scrollToEnd);

  return { data, scrollViewRef, windowWidth, handleScroll };
};
