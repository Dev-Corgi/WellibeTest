import React,{ useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const DynamicTextFrame = () => {
  const [text, setText] = useState(''); // 내부 텍스트 상태

  // 텍스트 입력 시 내부 텍스트 상태 업데이트
  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={{ padding: 10, borderWidth: 1, borderColor: 'black' }}>
      {/* 외부 프레임 */}
      <Text style={{ fontSize: 18 }}>{text}</Text>
      <TextInput
        placeholder="내부 텍스트 입력"
        value={text}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

export default DynamicTextFrame;
