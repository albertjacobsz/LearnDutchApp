import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuText from './MenuText';
import MainStyleSheet from './../../MainStyleSheet';
const MainMenuBar = (props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      alignSelf: 'baseline',
      marginTop: '5%',
    },
  });

  return (
    <View style={[styles.container, MainStyleSheet.shadows]}>
      <MenuText
        name={props.name[0]}
        current={props.name[0] === props.current ? true : false}
        style={{ flex: 1 }}
        levelHandler={props.changeLevel}
      />
      <MenuText
        name={props.name[1]}
        current={props.name[1] === props.current ? true : false}
        style={{ flex: 1 }}
        levelHandler={props.changeLevel}
      />
      <MenuText
        name={props.name[2]}
        current={props.name[2] === props.current ? true : false}
        style={{ flex: 1 }}
        levelHandler={props.changeLevel}
      />
    </View>
  );
};
export default MainMenuBar;
