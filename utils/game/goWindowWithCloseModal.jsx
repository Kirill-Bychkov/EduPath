export const goWindowWithCloseModal = (goWindow, closeWindowModal) => {
  return (path) => {
    if (closeWindowModal) {
      closeWindowModal();
    }

    goWindow(path);
  };
};
