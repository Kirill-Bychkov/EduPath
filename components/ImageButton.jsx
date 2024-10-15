import { Image, Pressable, StyleSheet } from 'react-native';

export default function ImageButton({ onPress, source, imageStyle }) {
    return (
        <Pressable
        onPress={onPress}
        style={( { pressed } ) => {
            return { opacity: pressed ? 0 : 1}
            }}>
            <Image style={imageStyle} source={source} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0
    },
    notPressed: {
        opacity: 1
    }
});

