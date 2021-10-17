import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useQuery } from 'react-query';
import MainLevelScreenWrapper from './MainLevelScreenWrapper';
import LoadingScreen from './../LoadingScreen/LoadingScreen';
//import useLevels from '../../Controllers/getAllLevels.js';

const useLevels = async () => {
  let data;
  await fetch('https://learn-dutch-api.herokuapp.com/api/v1/levels')
    .then((res) => res.json())
    .then((res) => {
      data = res;
    });
  return data;
};

const MainLevelScreen = ({ navigation }) => {
  const { data, isLoading, isSuccess } = useQuery('levels', useLevels);
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isSuccess) {
    return (
      <MainLevelScreenWrapper
        units={data.data.document}
        navigation={navigation}
      />
    );
  }
};
export default MainLevelScreen;
