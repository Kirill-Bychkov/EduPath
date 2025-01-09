import { useRouter } from "expo-router";
import { useLoading } from "../../config/loadingProvider.js";
import { useState } from "react";
import { getTextLevels } from "./data.jsx";

export const useGoWindow = () => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  const goWindow = (path) => {
    showLoading();

    setTimeout(() => {
      router.push(path);
      hideLoading();
    }, 3500);
  };

  return goWindow;
};

export const useWindowModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState({ title: "", description: "" });

  const openWindowModal = (levelIndex) => {
    setCurrentLevel(getTextLevels[levelIndex - 1]);
    setModalVisible(true);
  };

  const closeWindowModal = () => setModalVisible(false);

  return { modalVisible, currentLevel, openWindowModal, closeWindowModal };
};

export const withCloseModal = (goWindow, closeWindowModal) => {
  return (path) => {
    if (closeWindowModal) {
      closeWindowModal();
    }

    goWindow(path);
  };
};
