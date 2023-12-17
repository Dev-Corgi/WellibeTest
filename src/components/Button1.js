import React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { Color, FontFamily,height } from '../GlobalStyles';

//기본 버튼 컴포넌트

const Button1 = ({text,style,onPress,isActive = true}) => {
    return (
        <Pressable style={[styles.view,style,{backgroundColor: isActive ? style.backgroundColor ? style.backgroundColor : Color.navy(1) : Color.gray_200(1)}]} onPress = {() => {if(isActive){onPress()}}}>
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
        backgroundColor: Color.navy(1)
    },

    text: {
        position: "relative",
        width: "auto",
        fontSize: 16 * height,
        textAlign: "center",
        fontFamily : FontFamily.PretendardBold,
        color: Color.white(1)
    }

});

export default Button1;
