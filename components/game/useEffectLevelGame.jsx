import { useRef, useCallback, useMemo } from "react";
import { getButtonsLevel } from "./data.jsx";
import { useWindowDimensions } from "react-native";

export const useEffectLevelGame = () => {
  const scrollViewRef = useRef(null);
  const windowWidth = useWindowDimensions().width;

  const data = useMemo(() => ({
    buttonsLevel: getButtonsLevel(windowWidth)
  }), [windowWidth]);

  const handleScroll = useCallback((event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY < 0) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, []);

  return { data, scrollViewRef, handleScroll };
};
