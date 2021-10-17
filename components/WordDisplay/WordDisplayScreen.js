import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import WordDutchComponent from './WordDisplayComponents/WordDutchComponent';
import WordEnglishComponent from './WordDisplayComponents/WordEnglishComponent';
import WordImageComponent from './WordDisplayComponents/WordImageComponent';

const styleSheet = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#FF9B00',
  },
});
const WordDisplayScreen = ({ route, navigation }) => {
  const [data, setData] = useState(route.params.data);
  const [counter, setCounter] = useState(0);
  const onClickHandler = () => {
    setCounter(counter + 1);
    if (counter >= data.length - 2) {
      navigation.navigate('PressQuiz', { data: data });
    }
  };
  return (
    <Pressable style={styleSheet.container} onPress={onClickHandler}>
      <WordDutchComponent text={data[counter].name} />
      <WordEnglishComponent text={data[counter].english} />
    </Pressable>
  );
};
export default WordDisplayScreen;
//      <WordImageComponent />
