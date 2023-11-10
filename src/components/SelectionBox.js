import  React, {useState} from 'react';
import { StyleSheet, Image, View, Text ,Pressable} from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';

const SelectionBox = ({text}) => {
    const [isActive, setisActive] = useState(false)
    return (
        <Pressable style={[styles.view, { backgroundColor: isActive ? Color.colorKhaki : Color.colorWhitesmoke_100 }]} onPress={() => setisActive(!isActive)}>
        <Text style={[styles.text, { color: isActive ? Color.white : Color.black }]}>{text}</Text>
      </Pressable>
    );
};

const styles = StyleSheet.create({
    view: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 327,
        height: 52,
        borderRadius: 12,
        backgroundColor: Color.colorWhitesmoke_100,
      },
    
      inputfieldText: {
        fontFamily: FontFamily.PretendardSemiBold,
        fontSize: 18,
      },

});

export default SelectionBox;
