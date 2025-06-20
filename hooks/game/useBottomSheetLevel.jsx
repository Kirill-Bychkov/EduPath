import { useRef } from "react";

export const useBottomSheetLevel = () => {
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return {
    bottomSheetRef,
    openBottomSheet
  };
};
