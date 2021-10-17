import React from 'react';
import { View } from 'react-native';
import DisplayUnitButton from './DisplayUnitButton';
import mainStyles from './../../MainStyleSheet';
const DisplayUnitButtons = (props) => {
  const data = props.data;
  return (
    <View
      style={[
        { backgroundColor: 'white', marginTop: '4%', padding: '10%' },
        mainStyles.rounded_corners,
      ]}
    >
      <DisplayUnitButton
        text={'Vocabulary'}
        data={props.data.vocabulary}
        screen="vocabulary"
        switchScreen={props.inputHandler}
      />
      <DisplayUnitButton
        text={'Grammar'}
        data={props.data.grammar}
        screen="grammar"
        switchScreen={props.inputHandler}
      />
    </View>
  );
};
export default DisplayUnitButtons;
//      <DisplayUnitButton text={'Short story'} data={props.data.text} />
