import React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';

const Button1 = ({text,style,onPress}) => {
    return (
        <Pressable style={[styles.view,style]} onPress = {onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    view: {
        width: 340,
        height: 57,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 16,
        backgroundColor: Color.navy
    },

    text: {
        position: "relative",
        width: "auto",
        fontSize: 16,
        textAlign: "center",
        fontFamily : FontFamily.PretendardBold,
        color: Color.white
    }

});

export default Button1;
