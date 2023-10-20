import React from 'react';
import HolidayComponentScreen from './HolidayComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type TProps = NativeStackScreenProps<RootStackParamList, 'holiday'>;

const HolidayContainerScreen = ({navigation, route}: TProps) => {
  function pressBackButton() {
    navigation.goBack();
  }
  return (
    <HolidayComponentScreen
      imgSource={route.params.id}
      name={route.params.name}
      rating={route.params.rating}
      pressBackButton={pressBackButton}
    />
  );
};

export default HolidayContainerScreen;
