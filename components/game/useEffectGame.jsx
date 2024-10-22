import { useState, useEffect, useRef, useCallback } from "react";
import { getButtonsData, getLevelsData, getImagesMenuData } from "./DataImage.jsx";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const useEffectGame = () => {
  const scrollViewRef = useRef(null);
  const router = useRouter();
  const windowWidth = useWindowDimensions().width;

  const [data, setData] = useState({
    buttonsData: getButtonsData(router, windowWidth),
    levelsData: getLevelsData(windowWidth),
    imagesMenuData: getImagesMenuData(windowWidth),
  });

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (scrollY < 0) {
      scrollViewRef.current.scrollTo({ y: 0, animated: false });
    }
  };

  const scrollToEnd = useCallback(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  }, []);

  useEffect(() => {
    const newButtonsData = getButtonsData(router, windowWidth);
    const newLevelsData = getLevelsData(windowWidth);
    const newImagesMenuData = getImagesMenuData(windowWidth);

    setData({
      buttonsData: newButtonsData,
      levelsData: newLevelsData,
      imagesMenuData: newImagesMenuData,
    });

    scrollToEnd();

  }, [router, windowWidth]);

  useFocusEffect(
    useCallback(() => {
      scrollToEnd();
    }, [])
  );

  return { data, scrollViewRef, windowWidth, handleScroll };
};
