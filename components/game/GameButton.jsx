import { StyleSheet, View } from "react-native";
import ImageButton from "../ImageButton.jsx";

export default function GameButton({ item }) {
    return (
        <View style={styles.wrapper}>
            <ImageButton
                onPress={item.action}
                imageStyle={[styles.image, {
                    left: item.left,
                    top: item.top,
                    width: item.width,
                    height: item.height
                }]}
                source={item.source}
                animation={item.effect}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
      zIndex: 1
    },
    image: {
      position: "absolute"
    }
  });
  