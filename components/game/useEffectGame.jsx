import { useEffect, useRef, useCallback, useMemo } from "react";
import { getButtonsData, getLevelsData, getImagesMenuData } from "./DataImage.jsx";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useLoading } from "../../config/LoadingProvider";

export const useEffectGame = () => {
  const scrollViewRef = useRef(null);
  const router = useRouter();
  const windowWidth = useWindowDimensions().width;
  const { showLoading, hideLoading } = useLoading();

  const handleAction = () => {
    showLoading();

    setTimeout(() => {
      router.push("/");
      hideLoading();
    }, 3500);
  };

  const data = useMemo(() => ({
    buttonsData: getButtonsData(handleAction, windowWidth),
    levelsData: getLevelsData(windowWidth),
    imagesMenuData: getImagesMenuData(windowWidth),
  }), [handleAction, windowWidth]);

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
