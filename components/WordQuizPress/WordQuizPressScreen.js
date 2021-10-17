import React from 'react';
import { View } from 'react-native';
import WordQuizWrapper from './WordQuizPressComponents/WordQuizWrapper';
const WordQuizPressScreen = ({ route, navigation }) => {
  const data = route.params.data;
  const changeScreen = () => {
    navigation.navigate('MatchQuiz', { data });
  };
  return (
    <View
      style={{
        container: {
          justifyContent: 'center',
          flexDirection: 'column',
          flex: 1,
          alignContent: 'center',
          backgroundColor: '#FF9B00',
        },
      }}
    >
      <WordQuizWrapper data={data} changeScreen={changeScreen} />
    </View>
  );
};
export default WordQuizPressScreen;
