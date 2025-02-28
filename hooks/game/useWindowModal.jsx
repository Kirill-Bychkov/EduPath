import { useState } from "react";
import { IMAGES } from "../../constants";

export const useWindowModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState({ title: "", description: "" });

  const openWindowModal = (id) => {
    setCurrentLevel(IMAGES.TEXT_LEVELS[id]);
    setModalVisible(true);
  };

  const closeWindowModal = () => setModalVisible(false);

  return { modalVisible, currentLevel, openWindowModal, closeWindowModal };
};
