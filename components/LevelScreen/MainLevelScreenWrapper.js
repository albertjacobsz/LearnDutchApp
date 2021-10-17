import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import MainUnitsComponent from './Units/MainUnitsComponents.js';
import GestureRecognizer from 'react-native-swipe-gestures';
import MainMenuBar from './MenuBar/MainMenuBar';
import Settings from './Settings/MainSettingsScreen';

const MainLevelScreenWrapper = (props) => {
  const units = props.units;
  const levels = ['A1', 'A2', 'B1'];
  //DEFINE STATES
  const [level, setLevel] = useState(levels[0]);

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };
  return (
    <GestureRecognizer
      onSwipeLeft={() => {
        if (level === 'B1') {
          return setLevel(levels[0]);
        }
        setLevel(levels[levels.indexOf(level) + 1]);
      }}
      onSwipeRight={() => {
        if (level === 'A1') {
          return setLevel(levels[2]);
        }
        setLevel(levels[levels.indexOf(level) - 1]);
      }}
      style={{ flex: 1, backgroundColor: '#FF9B00' }}
    >
      <View style={{ flexDirection: 'column', marginTop: '10%' }}>
        <MainMenuBar name={levels} current={level} changeLevel={changeLevel} />
        <Settings />
        <ScrollView>
          <MainUnitsComponent
            units={units[levels.indexOf(level)]}
            navigation={props.navigation}
          />
        </ScrollView>
      </View>
    </GestureRecognizer>
  );
};
export default MainLevelScreenWrapper;
