import React from 'react';
import HomeComponentScreen from './HomeComponent';
import {RootStackParamList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TProps = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeContainerScreen = ({navigation}: TProps) => {
  function onCardPress(img: string, name: string, rating: number) {
    navigation.push('holiday', {id: img, name, rating});
  }
  return <HomeComponentScreen onCardPress={onCardPress} />;
};

export default HomeContainerScreen;
