import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { FontFamily,Color,height } from '../GlobalStyles';

const RegistrationTooltip = ({style,title,message}) => {
    return (
        <View style = {[styles.view,style]}>
        <Text style = {styles.title}>{title}</Text>
        <View style={styles.messageFrame}>
            <Image style = {styles.coachProfile} source={require("../assets/img/coachProfile.png")}></Image>
            <Text style={styles.message}>{message}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({

    view:{
        position : "relative",
        display: "flex",
        flexDirection: "column"
    },

    messageFrame: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius : 12,
        width : 330,
        height: 52,
        marginTop : 26,
        backgroundColor : Color.gray_100(1)
    },

    title: {
        fontFamily: FontFamily.PretendardBold,
        fontSize: 22 * height,
        color: Color.black(1),
        lineHeight: 34,
        width: '100%',
        textAlign: 'left',
        marginBottom: 20,
      },

    message: {
        position: "relative",
        marginLeft : 12,
        fontSize: 14 * height,
        fontFamily : FontFamily.PretendardLight,    
    },

    coachProfile:{
        position : "relative",
        marginLeft : 15,
        width: 35,
        height: 35,
        borderRadius : 100
    }

});

export default RegistrationTooltip;
