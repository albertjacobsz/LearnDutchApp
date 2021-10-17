import React from 'react';
import { Pressable, View } from 'react-native';
import DisplayUnitButtons from './DisplayUnitComponents/DisplayUnitButtons';
import DisplayUnitTitle from './DisplayUnitComponents/DisplayUnitTitle';
import DisplayUnitDescription from './DisplayUnitComponents/DisplayUnitDescription';

const MainDisplayUnit = ({ route, navigation }) => {
  const levels = route.params.levels;
  const switchScreen = () => {
    navigation.navigate('MainScreen', { levels });
  };
  const goToDifferentScreen = (screen, data) => {
    if (screen === 'vocabulary') {
      navigation.navigate('Word', { data: data, levels });
    } else if (screen === 'grammar') {
    } else if (screen === 'text') {
    }
  };
  return (
    <Pressable
      style={{ flex: 1, backgroundColor: '#FF9B00' }}
      onPress={switchScreen}
    >
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: '50%',
        }}
      >
        <DisplayUnitTitle title={route.params.data.name} />
        <DisplayUnitDescription description={route.params.data.description} />
        <DisplayUnitButtons
          data={route.params.data}
          inputHandler={goToDifferentScreen}
        />
      </View>
    </Pressable>
  );
};
export default MainDisplayUnit;
