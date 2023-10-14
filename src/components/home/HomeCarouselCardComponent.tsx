import React from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';
import {IHomeCarouselCardInterface} from '../../types';
import PrimaryText from '../text/PrimaryText';
import SecondaryText from '../text/SecondaryText';
import LocationIcon from '../../assets/images/location.svg';

const beach = require('../../assets/images/beach-2.jpg');
const mountains = require('../../assets/images/mountains.jpg');

const HomeCarouselCardComponent = (props: IHomeCarouselCardInterface) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(props.img === 'beach-2.jpg' ? {marginLeft: 20} : null),
      }}>
      <Image
        source={props.img === 'beach-2.jpg' ? beach : mountains}
        style={styles.image}
      />
      <View id="content" style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <PrimaryText title={props.title} style={styles.title} />
          <View style={styles.subtitleWrapper}>
            <LocationIcon style={styles.locationImg} width={9} height={13} />
            <SecondaryText title={props.subtitle} style={styles.subtitle} />
          </View>
        </View>
        <View style={styles.ratingWrapper}>
          <Image
            source={require('../../assets/images/star.png')}
            style={styles.ratingImage}
          />
          <SecondaryText
            title={props.rating.toString()}
            style={styles.ratingText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginRight: 20,
    gap: 20,
    borderRadius: 11,
    ...Platform.select({
      android: {elevation: 4},
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 15,
        shadowOffset: {
          height: 30,
          width: 30,
        },
      },
    }),
    marginVertical: 20,
  },
  image: {
    width: 170,
    height: 130,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrapper: {},
  title: {fontSize: 16},
  subtitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  subtitle: {
    fontSize: 14,
  },
  locationImg: {},
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-end',
  },
  ratingImage: {
    width: 17,
    height: 16,
  },
  ratingText: {
    fontSize: 11,
  },
});

export default HomeCarouselCardComponent;
