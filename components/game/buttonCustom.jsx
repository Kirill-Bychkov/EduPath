import { View, TouchableOpacity, Image } from "react-native";

const ButtonCustom = ({ item, action, disableOpacity }) => {
    const { source, ...rest } = item;
    const opacity = disableOpacity ? 1.0 : 0.4;

    return (
        <View style={rest}>
            <TouchableOpacity onPress={action} activeOpacity={opacity}>
                <Image
                    source={source}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ButtonCustom;
