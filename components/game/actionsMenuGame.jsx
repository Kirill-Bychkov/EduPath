import { useRouter } from "expo-router";
import { useLoading } from "../../config/loadingProvider.js";
import { useState } from "react";
import { getTextLevels } from "./dataImageButtonText.jsx";

export const useBackToMainMenu = () => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  const BackToMainMenu = () => {
    showLoading();

    setTimeout(() => {
      router.push("/");
      hideLoading();
    }, 3500);
  };

  return BackToMainMenu;
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
