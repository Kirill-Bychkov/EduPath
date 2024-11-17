const baseWidth = 412;
const maxCoordY = 1344;
const heightBottomObj = 84.21;

const Responsive = (value, currentWidth) => {
    return currentWidth * value / baseWidth;
};

export const WindowHeight = (currentWidth) => {
    return Responsive(maxCoordY, currentWidth) + Responsive(heightBottomObj, currentWidth);
};

export const getResponsiveDimensions = ({ top, left, width, height }, currentWidth) => ({
    top: Responsive(top, currentWidth),
    left: Responsive(left, currentWidth),
    width: Responsive(width, currentWidth),
    height: Responsive(height, currentWidth),
});
