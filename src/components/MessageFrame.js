import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { FontFamily,Color,height } from '../GlobalStyles';

//채팅 부분에 있는 메세지 프레임 컴포넌트

const MessageFrame = ({text}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    view: {
        position: "relative",
        display: "flex",
        // maxwidth: moderateScale(250,2),
        paddingTop: 12,
        paddingBottom : 12,
        paddingLeft : 14,
        paddingRight : 14,
        justifyContent: "center",
        alignItems: "left",
        borderRadius : 10,
        backgroundColor : Color.white(1)
    },

    text: {
        position: "relative",
        fontSize: 14 * height,
        fontFamily : FontFamily.PretendardRegular,
        lineHeight: 18,        
    }

});

export default MessageFrame;
