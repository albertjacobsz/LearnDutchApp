import React from 'react';
import { View, Pressable, Image } from 'react-native';
import styles from './../../../MainStyleSheet';

const UnitCircleComponent = (props) => {
  const data = props.data;
  const levels = props.levels;
  console.log(props.image);
  const switchScreen = () => {
    props.navigation.navigate('Display', { levels, data });
  };

  return (
    <View style={{ marginLeft: '2%' }}>
      <Pressable onPress={switchScreen}>
        <View
          style={[
            props.finished
              ? { backgroundColor: 'green' }
              : { backgroundColor: 'red' },
            styles.shadows,
            { width: 88, height: 88, borderRadius: 88 / 2 },
            { justifyContent: 'center' },
          ]}
        >
          <View
            style={[
              { backgroundColor: 'white' },
              { width: 77, height: 77, borderRadius: 77 / 2 },
              { marginLeft: '5.5%', justifyContent: 'center' },
            ]}
          >
            <Image
              source={props.image}
              style={[
                { width: 55, height: 55, borderRadius: 55 / 2 },
                { marginLeft: '15%' },
              ]}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default UnitCircleComponent;
