import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF9B00',
    justifyContent: 'center',
    flex: 1,
  },
  dots_container: {
    flexDirection: 'row',
  },
  circles: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    marginLeft: 5,
    backgroundColor: 'white',
  },
});
const LoadingScreen = () => {
  return (
    <View style={[styles.container]}>
      <View>
        <Text>Loading</Text>
      </View>
      <View style={styles.dots_container}>
        <View style={styles.circles} />
        <View style={styles.circles} />
        <View style={styles.circles} />
      </View>
    </View>
  );
};
export default LoadingScreen;
