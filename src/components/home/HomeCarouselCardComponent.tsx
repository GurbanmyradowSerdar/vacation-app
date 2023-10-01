import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {IHomeCarouselCardInterface} from '../../types';
import PrimaryText from '../text/PrimaryText';
import SecondaryText from '../text/SecondaryText';

const beach = require('../../assets/images/beach-2.jpg');
const mountains = require('../../assets/images/mountains.jpg');

const HomeCarouselCardComponent = (props: IHomeCarouselCardInterface) => {
  return (
    <View>
      <Image source={props.img === 'beach-2.jpg' ? beach : mountains} />
      <View id="content">
        <View>
          <PrimaryText title={props.title} />
          <SecondaryText title={props.subtitle} />
        </View>
        <View>
          <Image source={require('../../assets/images/star.png')} />
          <SecondaryText title={props.rating.toString()} />
        </View>
      </View>
    </View>
  );
};

export default HomeCarouselCardComponent;
