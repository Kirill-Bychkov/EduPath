import { TouchableOpacity, Image } from "react-native";

const ImageButton = ({ item, action, disableOpacity }) => {
    const { source, ...rest } = item;
    const opacity = disableOpacity ? 1.0 : 0.4;

    return (
        <TouchableOpacity
            onPress={action}
            activeOpacity={opacity}
            style={rest}
        >
            <Image
                source={source}
                style={{
                    width: "100%",
                    height: "100%"
                }}
            />
        </TouchableOpacity>
    );
};

export default ImageButton;
