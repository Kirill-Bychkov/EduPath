import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import { icons } from "../constants/icons.js";
import { useTheme } from '../config/ThemeProvider';
import { COLORS } from '../constants/colors.js';

const TitleBar = () => {
    const { dark, colors } = useTheme();

    const icon = {
        help : icons.help,
    }

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text style={[styles.title, { color: colors.header_text}]}>EduPyth</Text>
            <TouchableOpacity style={styles.iconContainer}>
                <Image
                    source={icon.help}
                    style={[styles.icon, {tintColor: dark ? COLORS.primary : COLORS.not_active}]}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        fontFamily: 'Rubik-Bold',
        fontSize: 24,
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        //flex: 1,
    },
    iconContainer:{
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    }
})

export default TitleBar;