import React from 'react';
import { View, Pressable } from 'react-native';
import UnitCircleComponent from './UnitCircleComponent';
import UnitTextComponent from './UnitTextComponent';
const MainUnitComponent = (props) => {
  const bool = props.data.key % 2 == 0;
  return (
    <Pressable
      name="data"
      value={props.data}
      style={
        bool
          ? { alignSelf: 'flex-end', marginRight: '7%' }
          : { alignSelf: 'auto', marginLeft: '7%' }
      }
    >
      <View style={{ alignSelf: 'baseline', margin: '5%' }}>
        <UnitCircleComponent
          finished={props.finished}
          image={require('./../../../../assets/unit_images/stock.png')}
          navigation={props.navigation}
          data={props.data}
          levels={props.levels}
        />
        <UnitTextComponent
          text={props.data.name}
          navigation={props.navigation}
          data={props.data}
          levels={props.levels}
        />
      </View>
    </Pressable>
  );
};
export default MainUnitComponent;
