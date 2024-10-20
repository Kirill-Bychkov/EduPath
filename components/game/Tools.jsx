const baseWidth = 412;
const maxCoordY = 1344;
const heightBottomObj = 84.21;

export const Responsive = (value, currentWidth) => {
    return currentWidth * value / baseWidth;
};

export const WindowHeight = (currentWidth) => {
    return Responsive(maxCoordY, currentWidth) + Responsive(heightBottomObj, currentWidth);
};
