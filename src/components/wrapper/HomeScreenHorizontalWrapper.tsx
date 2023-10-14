import React from 'react';
import {View} from 'react-native';
import {IHomeHorizontalWrapperInterface} from '../../types';

const HomeScreenHorizontalWrapper = ({
  style,
  children,
}: IHomeHorizontalWrapperInterface) => {
  return <View style={{paddingHorizontal: 15, ...style}}>{children}</View>;
};

export default HomeScreenHorizontalWrapper;
