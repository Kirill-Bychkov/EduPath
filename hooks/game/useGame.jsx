import { useRef, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export const useGame = () => {
  const scrollViewRef = useRef(null);

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

  useFocusEffect(scrollToEnd);

  return { scrollViewRef, handleScroll };
};
