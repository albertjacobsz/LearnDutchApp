import React, { useState } from 'react';
import { View } from 'react-native';
import QuizButton from './QuizButton';
import WordDutchComponent from './../../WordDisplay/WordDisplayComponents/WordDutchComponent';
import QuizController from '../../../Controllers/WordQuizController';
//import WordQuizMatrixController from './WordQuizMatrixController';
const WordQuizWrapper = (props) => {
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

  const getClickedValue = (data) => {
    if (counter < questionsStack.length - 1 || questionsStack.length == 0) {
      return props.changeScreen();
    }
    if (answer.name === data.name) {
      console.log('correct');
    } else {
      //console.log("you're wrong :(");
    }
    setCounter(() => counter + 1);

    setAnswer(questionsStack[questionsStack.length - 1]);
    setButtonOneValue(questionsStack.pop());
    setButtonTwoValue(questionsStack.pop());
    setButtonThreeValue(questionsStack.pop());
    setButtonFourValue(questionsStack.pop());
  };
  return (
    <View
      style={[
        {
          alignItems: 'center',

          justifyContent: 'center',
        },
      ]}
    >
      <WordDutchComponent text={answer.name} />
      <View style={[{ flexDirection: 'row' }]}>
        <QuizButton
          text={buttonOneValue.english}
          value={buttonOneValue}
          onClick={getClickedValue}
        />
        <QuizButton
          text={buttonTwoValue.english}
          value={buttonTwoValue}
          onClick={getClickedValue}
        />
      </View>
      <View style={[{ flexDirection: 'row' }]}>
        <QuizButton
          text={buttonThreeValue.english}
          value={buttonThreeValue}
          onClick={getClickedValue}
        />
        <QuizButton
          text={buttonFourValue.english}
          value={buttonFourValue}
          onClick={getClickedValue}
        />
      </View>
    </View>
  );
};
export default WordQuizWrapper;
