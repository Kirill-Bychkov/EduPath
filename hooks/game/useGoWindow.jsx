import { useLoading } from "../../contexts/LoadingProvider";

export const useGoWindow = (navigation) => {
  const { showLoading, hideLoading } = useLoading();

  const executeWithLoading = (action) => {
    showLoading();

    setTimeout(() => {
      action();
      hideLoading();
    }, 2500);
  };

  const goWindow = (path, params = {}) => {
    executeWithLoading(() => navigation.navigate(path, params));
  };

  const goBack = () => {
    executeWithLoading(() => navigation.goBack());
  };

  return { goWindow, goBack };
};
