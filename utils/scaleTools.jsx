import { BASE_LAYOUT, CURRENT_LAYOUT, DIMENSIONS } from "../constants"

const Responsive = (value) => value * CURRENT_LAYOUT.width / BASE_LAYOUT.width;

const isNumeric = (value) => typeof value === "number";
const isObject = (value) => typeof value === "object";
const isScalableKey = (key) => ["width", "height", "top", "left"].includes(key);

export const ScaleObjectValues = (obj, scaleAll = false) => {
  if (!obj || !isObject(obj)) return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => ScaleObjectValues(item, scaleAll));
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (value && isObject(value)) {
        return [key, ScaleObjectValues(value, scaleAll)];
      }
      
      if (isNumeric(value) && (scaleAll || isScalableKey(key))) {
        return [key, Responsive(value)];
      }
      
      return [key, value];
    })
  );
};

export const WindowHeight = () => {
    return Responsive(
        DIMENSIONS.GAME.menu.maxCoordY + DIMENSIONS.GAME.menu.heightBottomObj,
        CURRENT_LAYOUT.width
    );
};
