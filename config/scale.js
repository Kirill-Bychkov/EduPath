import { IMAGES, DIMENSIONS, CURRENT_LAYOUT, MIN_WIDTH_TABLET } from "../constants";
import { ScaleObjectValues } from "../utils/scaleTools";

export const imgGame = ScaleObjectValues(IMAGES.GAME);
export const dmsGame = ScaleObjectValues(DIMENSIONS.GAME, true);
export const dmsLevelGrids = ScaleObjectValues(DIMENSIONS.LEVEL_GRIDS);

const isTablet = CURRENT_LAYOUT.width >= MIN_WIDTH_TABLET;
const styleStatic = isTablet
                    ? DIMENSIONS.INTERPRETER.tablet
                    : DIMENSIONS.INTERPRETER.phone;
const styleDynamic = ScaleObjectValues(DIMENSIONS.INTERPRETER.general, true);
export const dmsInterpreter = { styleStatic, styleDynamic };
