import React from 'react';
import { View } from 'react-native';
import MainUnitComponent from './Unit/MainUnitComponent';

const MainUnitsComponent = (props) => {
  const list = (data) => {
    return data.map((element) => {
      return (
        <MainUnitComponent
          data={element}
          key={element._id}
          onClick={props.onClick}
          levels={props.levels}
          navigation={props.navigation}
        />
      );
    });
  };
  return <View>{list(props.units.units)}</View>;
};
export default MainUnitsComponent;
