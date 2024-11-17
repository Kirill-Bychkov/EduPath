import React, { memo } from 'react';
import { StyleSheet, View } from "react-native";
import ImageButton from "./ImageButton.jsx";

const GameButton = ({ item }) => {
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
};

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 1
    },
    image: {
        position: "absolute"
    }
});

export default memo(GameButton);
