import React, { memo } from 'react';
import { StyleSheet, View } from "react-native";
import ImageButton from "./imageButton.jsx";

const WrapperImageButton = ({ item, action, absolute = false }) => {
    return (
        <View style={styles.wrapper}>
            <ImageButton
                onPress={action}
                imageStyle={[
                    absolute && { position: "absolute", top: item.top, left: item.left },
                    { width: item.width, height: item.height }
                ]}
                source={item.source}
                animation={item.effect}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 1
    }
});

export default memo(WrapperImageButton);
