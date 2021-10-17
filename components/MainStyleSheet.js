import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  rounded_corners: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  circle_container: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    marginLeft: 5,
  },
  side_margins: { marginLeft: 10, marginRight: 10 },
  shadows: {
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  component_container: {
    marginTop: '5%',
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  component_text: {
    flex: 1,
    marginLeft: '25%',
    fontSize: 20,
  },
});
export default styles;
