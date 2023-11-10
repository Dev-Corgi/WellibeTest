import  React, {useState} from 'react';
import { StyleSheet, Image, View, Text ,Pressable} from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';

const SelectionList = ({selections}) => {
    const [currentIndex, setCurrentIndex] = useState(-1)
    return (
        <View style={styles.view}>
            {selections.map((selection,index) =>{
                return(
                        <Pressable key = {index} style={[styles.selectionBox, { backgroundColor: currentIndex == index ? Color.colorKhaki : Color.colorWhitesmoke_100 }]} onPress={() => setCurrentIndex(index)}>
                        <Text style={[styles.text, { color: currentIndex == index ? Color.white : Color.black }]}>{selection}</Text>
                      </Pressable>
                )
            })}
      </View>
    );
};

const styles = StyleSheet.create({
    view:{
        position: "relative",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        gap: 10,
      },

    selectionBox: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 327,
        height: 52,
        borderRadius: 12,
        backgroundColor: Color.colorWhitesmoke_100,
      },
    
      selectionText: {
        fontFamily: FontFamily.PretendardSemiBold,
        fontSize: 18,
      },

});

export default SelectionList;
