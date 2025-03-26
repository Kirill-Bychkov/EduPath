import { useRef, useCallback } from "react";

export const useLevelGame = () => {
  const scrollViewRef = useRef(null);
  const interpreterRef = useRef(null);
  const bottomSheetRef = useRef(null);

  const handleScroll = useCallback((event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY < 0) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, []);

  const runCode = () => {
    if (interpreterRef.current) {
      interpreterRef.current?.runUserCode();
    }
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return {
    scrollViewRef,
    handleScroll,
    interpreterRef,
    runCode,
    bottomSheetRef,
    openBottomSheet
  };
};
