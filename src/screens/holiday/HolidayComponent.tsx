import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IHolidayComponentInteface} from '../../types';
import ArrowIcon from '../../assets/images/arrow.svg';
import HomeScreenHorizontalWrapper from '../../components/wrapper/HomeScreenHorizontalWrapper';
import PrimaryText from '../../components/text/PrimaryText';
import SecondaryText from '../../components/text/SecondaryText';

const beach = require('../../assets/images/beach-2.jpg');
const mountains = require('../../assets/images/mountains.jpg');
const gallery = [
  require('../../assets/images/beach-1.jpg'),
  require('../../assets/images/beach.jpg'),
  require('../../assets/images/beach-3.jpg'),
  require('../../assets/images/beach-3.jpg'),
];

const HolidayComponentScreen = ({
  imgSource,
  name,
  rating,
  pressBackButton,
}: IHolidayComponentInteface) => {
  return (
    <View style={styles.main.wrapper}>
      <TouchableOpacity
        style={styles.main.arrowIconWrapper}
        activeOpacity={0.9}
        onPress={pressBackButton}>
        <ArrowIcon style={styles.main.arrowIcon} width={30} height={30} />
      </TouchableOpacity>
      <Image
        style={styles.main.mainImage}
        source={imgSource === 'beach-2.jpg' ? beach : mountains}
      />
      <ScrollView style={styles.card.scrollWrapper}>
        <HomeScreenHorizontalWrapper
          style={styles.card.horizontalPaddingWrapper}>
          {/* draggable line */}
          <View style={styles.card.draggableLineWrapper}>
            <View style={styles.card.draggableLine} />
          </View>
          {/* name and price */}
          <View style={styles.card.namePriceWrapper}>
            <View style={styles.card.nameRatingWrapper}>
              <PrimaryText title={name} style={styles.card.name} />
              <View style={styles.card.ratingWrapper}>
                <Image
                  source={require('../../assets/images/star.png')}
                  style={styles.card.ratingIcon}
                />
                <SecondaryText
                  title={rating.toString()}
                  style={styles.card.rating}
                />
              </View>
            </View>
            <View style={styles.card.priceWrapper}>
              <PrimaryText title="$19" style={styles.card.price} />
              <SecondaryText title="per person" style={styles.card.perPerson} />
            </View>
          </View>
          {/* map */}
          <Image
            source={require('../../assets/images/map.jpg')}
            style={styles.card.mapImage}
          />
          {/* about */}
          <View style={styles.card.aboutWrapper}>
            <PrimaryText title="About" style={styles.card.about} />
            <Text style={styles.card.aboutSpan}>
              <SecondaryText
                style={styles.card.aboutText}
                title="Tourism is a global industry that encompasses the enjoyment, 
              and understanding of different cultures, places, experiences. "
              />
              Read more...
            </Text>
          </View>
          {/* gallery */}
          <View style={styles.card.galleryWrapper}>
            <PrimaryText title="Gallery" style={styles.card.gallery} />
            <View style={styles.card.galleryImagesWrapper}>
              {gallery.map((item, i) => {
                return i === gallery.length - 1 ? (
                  <ImageBackground
                    source={item}
                    key={i}
                    style={styles.card.galleryImage}
                    borderRadius={15}>
                    <View style={styles.card.galleryImageDarkedView} />
                    <PrimaryText
                      title="8+"
                      style={styles.card.galleryImageNumber}
                    />
                  </ImageBackground>
                ) : (
                  <Image
                    key={i}
                    source={item}
                    style={styles.card.galleryImage}
                  />
                );
              })}
            </View>
          </View>
        </HomeScreenHorizontalWrapper>
      </ScrollView>
    </View>
  );
};

const styles = {
  main: StyleSheet.create({
    wrapper: {
      flex: 1,
      position: 'relative',
    },
    arrowIconWrapper: {
      position: 'absolute',
      zIndex: 10,
      backgroundColor: 'white',
      borderRadius: 100,
      padding: 10,
      marginLeft: 15,
      marginTop: 30,
    },
    arrowIcon: {
      transform: [
        {
          rotate: '180deg',
        },
      ],
    },
    mainImage: {
      width: 'auto',
      height: '42%',
      marginBottom: -35,
    },
  }),
  card: StyleSheet.create({
    // ! main styles
    scrollWrapper: {
      backgroundColor: '#F9F9F9',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    horizontalPaddingWrapper: {
      position: 'relative',
      display: 'flex',
      gap: 25,
      paddingVertical: 30,
    },
    draggableLineWrapper: {
      borderRadius: 50,
      position: 'absolute',
      top: 15,
      left: 15,
      alignItems: 'center',
      width: '100%',
    },
    draggableLine: {
      backgroundColor: '#CBCBCB',
      width: 55,
      height: 6,
      borderRadius: 20,
    },
    // ! price and name styles
    namePriceWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nameRatingWrapper: {},
    name: {
      fontSize: 22,
    },
    ratingWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    rating: {fontSize: 15},
    ratingIcon: {width: 17, height: 16},
    priceWrapper: {
      alignItems: 'flex-end',
    },
    price: {
      color: '#3AAAA7',
      fontSize: 22,
    },
    perPerson: {
      fontSize: 14,
    },
    // ! map styles
    mapImage: {
      width: '100%',
      height: 125,
    },
    // ! about styles
    aboutWrapper: {
      gap: 10,
    },
    about: {
      fontSize: 22,
    },
    aboutText: {
      fontSize: 14,
    },
    aboutSpan: {
      fontSize: 14,
      fontFamily: 'IBMPlexSans-Regular',
      color: '#FFC15F',
    },
    // ! gallery styles
    galleryWrapper: {
      gap: 10,
    },
    gallery: {
      fontSize: 22,
    },
    galleryImagesWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    galleryImage: {
      width: 85,
      height: 85,
      borderRadius: 15,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    galleryImageDarkedView: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 15,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    galleryImageNumber: {
      fontSize: 22,
      fontFamily: 'IBMPlexSans-BoldItalic',
      color: '#FFFFFF',
    },
  }),
};

export default HolidayComponentScreen;
