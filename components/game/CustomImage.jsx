import { StyleSheet, Image } from "react-native";

export default function CustomImage({ image }) {
    return (
        <Image
            source={image.source}
            style={[
                styles.image, {
                    left: image.left,
                    top: image.top,
                    width: image.width,
                    height: image.height,
                    zIndex: image.zIndex || 0
                },
                image.styleProps]}
        />
    );
}

const styles = StyleSheet.create({
    image: {
      position: "absolute"
    }
  });
