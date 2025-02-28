import { Dimensions, Platform, StatusBar } from "react-native";

export const BASE_LAYOUT = {
    width: 412,
    height: 915
};

export const CURRENT_LAYOUT = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
};

export const MIN_WIDTH_TABLET = 768;
export const HEIGHT_STATUS_BAR = Platform.OS === "android"
                                    ? StatusBar?.currentHeight || 20
                                    : 0;
