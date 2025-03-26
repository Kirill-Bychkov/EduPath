import { useState } from "react";
import { txtGame } from "../../config";

export const useWindowModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState({ id: "", title: "", description: "" });

  const openWindowModal = (id) => {
    setCurrentLevel(txtGame.window_modal[id]);
    setModalVisible(true);
  };

  const closeWindowModal = () => setModalVisible(false);

  return { modalVisible, currentLevel, openWindowModal, closeWindowModal };
};
