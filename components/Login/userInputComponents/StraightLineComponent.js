import React from 'react';
import { View, StyleSheet } from 'react-native';
const StraightLineComponent = () => {
  const styles = StyleSheet.create({
    line: {
      borderBottomWidth: 1,
      borderColor: 'white',
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '5%',
    },
  });
  return <View style={styles.line} />;
};
export default StraightLineComponent;
