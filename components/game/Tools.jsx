import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const baseWidth = 412;
const baseHeight = 915;
const maxCoordY = 1344;
const heightBottomObj = 84.21;

export const ResponsiveWidth = (value) => {
    return width * value / baseWidth;
};

export const ResponsiveHeight = (heightValue) => {
    return width * heightValue / baseWidth;
};

export const CoordX = (x) => {
    return width * x / baseWidth;
};

export const CoordY = (y) => {
    return width * y / baseWidth;
};

export const WindowHeight = () => {
    return CoordY(maxCoordY) + ResponsiveHeight(heightBottomObj);
};
