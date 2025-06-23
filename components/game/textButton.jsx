import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TextButton = ({ text, textStyle, backStyle, action, disableOpacity }) => {
    const opacity = disableOpacity ? 1.0 : 0.4;

    return (
        <TouchableOpacity
            onPress={action}
            activeOpacity={opacity}
            style={[styles.button, backStyle]}
        >
            <Text style={[styles.text, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        textAlign: "center"
    }
});

export default TextButton;
