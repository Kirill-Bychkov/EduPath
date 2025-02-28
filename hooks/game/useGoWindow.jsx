import { useRouter } from "expo-router";
import { useLoading } from "../../contexts";

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
