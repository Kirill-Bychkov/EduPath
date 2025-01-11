import { Pressable, Image } from "react-native";

const ImageButton = ({ onPress, source, imageStyle, animation = false }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {
                if (animation)
                    return { opacity: pressed ? 0.2 : 1 }

                return {};
            }}
        >
            <Image style={imageStyle} source={source} />
        </Pressable>
    );
}

export default ImageButton;
