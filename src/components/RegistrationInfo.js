import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { FontFamily,Color } from '../GlobalStyles';

const RegistrationInfo = ({text}) => {
    return (
        <View style={styles.view}>
            <Image style = {styles.coachProfile} source={require("../assets/img/coachProfile.png")}></Image>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    view: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius : 12,
        width : 330,
        height: 52,
        backgroundColor : Color.colorWhitesmoke_100
    },

    text: {
        position: "relative",
        marginLeft : 12,
        fontSize: 14,
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

export default RegistrationInfo;
