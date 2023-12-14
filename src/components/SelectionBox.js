import  React, {useState} from 'react';
import { StyleSheet, Image, View, Text ,Pressable} from 'react-native';
import { Color, FontFamily,height } from '../GlobalStyles';

const SelectionBox = ({text}) => {
    const [isActive, setisActive] = useState(false)
    return (
        <Pressable style={[styles.view, { backgroundColor: isActive ? Color.primary_700(1) : Color.gray_200(1) }]} onPress={() => setisActive(!isActive)}>
        <Text style={[styles.text, { color: isActive ? Color.white(1) : Color.black(1) }]}>{text}</Text>
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
        backgroundColor: Color.gray_200(1),
      },
    
      inputfieldText: {
        fontFamily: FontFamily.PretendardSemiBold,
        fontSize: 18 * height,
      },

});

export default SelectionBox;
