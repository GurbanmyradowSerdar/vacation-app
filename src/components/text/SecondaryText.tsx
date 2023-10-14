import React from 'react';
import {Text} from 'react-native';
import {ISecondaryTextInterface} from '../../types';

const SecondaryText = (props: ISecondaryTextInterface) => {
  return (
    <Text
      style={{
        fontFamily: 'IBMPlexSans-Regular',
        fontSize: 16,
        color: '#7C868F',
        ...props.style,
      }}>
      {props.title}
    </Text>
  );
};

export default SecondaryText;
