import React from 'react';
import WordQuizMatchWrapper from './WordQuizMatchWrapper';

const WordQuizMatch = ({ route, navigation }) => {
  const data = route.params.data;
  return <WordQuizMatchWrapper data={data} />;
};
export default WordQuizMatch;
