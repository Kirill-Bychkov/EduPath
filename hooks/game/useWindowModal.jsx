import { useState, useCallback } from "react";
import { txtGame } from "../../config";
import { getRandomInt } from "../../utils/randomInt";

export const useWindowModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openWindowModal = useCallback((externalKey, internalKey) => {
    const contents = txtGame.window_modal[externalKey][internalKey];

    setModalContent(() =>
      Array.isArray(contents)
        ? contents[getRandomInt(contents.length)]
        : contents
    );
    setModalVisible(true);
  }, []);

  const closeWindowModal = useCallback(() => {
    setModalVisible(false);
    setModalContent({});
  }, []);

  return {
    modalVisible,
    modalContent,
    openWindowModal,
    closeWindowModal
  };
};
