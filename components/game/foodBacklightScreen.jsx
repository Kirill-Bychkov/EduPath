import { Animated, StyleSheet } from "react-native";
import AnimatedImageCustom from "./animatedImageCustom";
import ImageCustom from "./imageCustom";
import { imgGame, dmsGame } from "../../config";
import { COLORS } from "../../constants";
import { getRotateInterpolate } from "../../utils/game/rotateInterpolate";

const FoodBacklightScreen = ({ visible, opacity, growRotate, food }) => {
  if (!visible) return null;

  return (
    <Animated.View style={[styles.backlightContainer, { opacity }]}>
        <AnimatedImageCustom
            key={"glow"}
            item={{
                ...imgGame.level_images.glow,
                transform: [{ rotate: getRotateInterpolate(growRotate) }]
            }}
        />
        
        <ImageCustom
            key={food}
            item={{
                ...imgGame.level_images[food],
                ...styles.food
            }}
        />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backlightContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.GAME.food_backlight_screen.background
  },
  food: {
    width: dmsGame.food_backlight_screen.widthFood,
    height: dmsGame.food_backlight_screen.heightFood
  }
});

export default FoodBacklightScreen;
