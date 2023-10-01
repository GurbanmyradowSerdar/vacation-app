import React from 'react';
import StartComponentScreen from './StartComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'start'>;

const StartContainerScreen = ({navigation}: Props) => {
  function handleOnClick() {
    navigation.push('home');
  }
  return <StartComponentScreen handleOnClick={handleOnClick} />;
};

export default StartContainerScreen;
