import React from 'react';
import { View, Image } from 'react-native';
import mainStyles from './../../MainStyleSheet';
const MainSettingsScreen = () => {
  return (
    <View style={{ flexDirection: 'row-reverse' }}>
      <View
        style={[
          {
            backgroundColor: 'white',
            alignSelf: 'baseline',
            padding: '2%',
          },
          mainStyles.shadows,
        ]}
      >
        <Image
          source={require('./../../../assets/icons/menu.png')}
          style={{ width: 25, height: 25, marginLeft: 'auto' }}
        />
      </View>
    </View>
  );
};
export default MainSettingsScreen;
