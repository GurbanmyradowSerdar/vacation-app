import React from 'react';
import {Text} from 'react-native';
import {IPrimaryTextInterface} from '../../types';

const PrimaryText = (props: IPrimaryTextInterface) => {
  return (
    <Text
      style={{
        fontFamily: 'IBMPlexSans-Bold',
        lineHeight: 53,
        fontSize: 41,
        color: '#232121',
        ...props.style,
      }}>
      {props.title}
    </Text>
  );
};

export default PrimaryText;
