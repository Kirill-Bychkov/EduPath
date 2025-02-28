import { View, Image } from "react-native";

const ImageCustom = ({ item }) => {
    const { source, ...rest } = item;

    return (
        <View style={rest}>
            <Image
                source={source}
                style={{
                    width: "100%",
                    height: "100%"
                }}
            />
        </View>
    );
};

export default ImageCustom;
