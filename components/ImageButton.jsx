import { Pressable, Image } from "react-native";

export default function ImageButton({ onPress, source, imageStyle, animation }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {
                if (animation)
                    return { opacity: pressed ? 0 : 1 }
            }}
        >
            <Image style={imageStyle} source={source} />
        </Pressable>
    );
}
