import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WordComponent from './WordQuizMatchComponents/WordComponent';
import QuizController from './../../Controllers/WordQuizController';
const WordQuizMatchWrapper = (props) => {
  const [counter, setCounter] = useState();
  const [questionsStack] = useState(QuizController.createStack(props.data));
  const [answer, setAnswer] = useState(
    questionsStack[questionsStack.length - 1]
  );
  const [buttonOneValue, setButtonOneValue] = useState(questionsStack.pop());
  const [buttonTwoValue, setButtonTwoValue] = useState(questionsStack.pop());
  const [buttonThreeValue, setButtonThreeValue] = useState(
    questionsStack.pop()
  );
  const [buttonFourValue, setButtonFourValue] = useState(questionsStack.pop());

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center', // if you want to fill rows left to right
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: '#FF9B00' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.container}>
          <WordComponent text={buttonOneValue.name} />
          <WordComponent text={buttonTwoValue.name} />
        </View>
        <View style={styles.container}>
          <WordComponent text={buttonThreeValue.name} />
          <WordComponent text={buttonFourValue.name} />
        </View>
        <View style={styles.container}>
          <WordComponent text={buttonOneValue.english} />
          <WordComponent text={buttonTwoValue.english} />
        </View>
        <View style={styles.container}>
          <WordComponent text={buttonThreeValue.english} />
          <WordComponent text={buttonFourValue.english} />
        </View>
      </View>
    </View>
  );
};
export default WordQuizMatchWrapper;
