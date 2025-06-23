import { useState, useCallback } from "react";
import { txtGame } from "../../config";
import { randomInt } from "../../utils/randomInt";

export const useWindowModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openWindowModal = useCallback((reason, value) => {
    const rawData = txtGame.window_modal[reason];

    const rawContent = value !== undefined && rawData?.[value]
      ? rawData[value]
      : rawData;

    const selected = Array.isArray(rawContent)
      ? rawContent[randomInt(rawContent.length)]
      : rawContent;
    
    const content = { type: reason, ...selected };

    setModalContent(content);
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
