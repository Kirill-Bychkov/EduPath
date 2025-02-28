import { createContext, useContext, useState, useCallback } from "react";
import LoadingScreen from "../components/game/loadingScreen";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loadingVisible, setLoadingVisible] = useState(false);

    const showLoading = useCallback(() => setLoadingVisible(true), []);

    const hideLoading = useCallback(() => setLoadingVisible(false), []);

    return (
        <LoadingContext.Provider value={{ showLoading, hideLoading }}>
            {children}
            <LoadingScreen visible={loadingVisible} />
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
