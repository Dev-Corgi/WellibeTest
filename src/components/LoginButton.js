import React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { FontFamily,height } from '../GlobalStyles';

//로그인 버튼 컴포넌트

const LoginButton = ({backgroundColor,logo,text,onPress}) => {
    return (
        <Pressable style={[styles.view,{backgroundColor: backgroundColor}]} onPress={onPress}>
            <Image
                style={styles.logo}
                source={logo}>
            </Image>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    view: {
        position: "relative",
        width: 327,
        height: 57,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 12
    },

    logo: {
        position: "absolute",
        left: 17,
        top: 17,
        width: 25,
        height: 25,
    },

    text: {
        position: "relative",
        width: "auto",
        fontSize: 16 * height,
        textAlign: "center",
        fontFamily : FontFamily.PretendardRegular
    }

});

export default LoginButton;
