import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import SecondaryText from '../../components/text/SecondaryText';
import PrimaryText from '../../components/text/PrimaryText';
import {IHomeCarouselCardInterface} from '../../types';
import HomeCarouselCardComponent from '../../components/home/HomeCarouselCardComponent';
import HomeScreenHorizontalWrapper from '../../components/wrapper/HomeScreenHorizontalWrapper';
import BellIcon from '../../assets/images/bell.svg';
import ArrowIcon from '../../assets/images/arrow.svg';

const data: IHomeCarouselCardInterface[] = [
  {
    img: 'beach-2.jpg',
    rating: 4.5,
    subtitle: 'Siofok, Hungary',
    title: 'Beach And Sea',
  },
  {
    img: 'mountains.jpg',
    rating: 4,
    subtitle: 'Chur, Switzerland',
    title: 'Alps',
  },
];

const HomeComponentScreen = () => {
  return (
    <View style={styles.main.wrapper}>
      {/* Nav */}
      <HomeScreenHorizontalWrapper style={styles.nav.container}>
        <View style={styles.nav.content}>
          <View style={styles.nav.avatarWrapper}>
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.nav.avatar}
            />
          </View>
          <View style={styles.nav.textContainer}>
            <SecondaryText
              style={styles.nav.cheering}
              title="Welcome Back 👋"
            />
            <PrimaryText style={styles.nav.name} title="Jhon Radrigaz" />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.6}>
          <BellIcon width={45} height={45} />
        </TouchableOpacity>
      </HomeScreenHorizontalWrapper>
      {/* Adventure */}
      <HomeScreenHorizontalWrapper style={styles.adventure.container}>
        <View style={styles.adventure.darkedElement} />
        <ImageBackground
          source={require('../../assets/images/nature.jpg')}
          style={styles.adventure.backgroundImage}
          borderRadius={12}>
          <View style={styles.adventure.contentWrapper}>
            <View style={styles.adventure.textWrapper}>
              <PrimaryText
                title="Start Your Adventure"
                style={styles.adventure.title}
              />
              <SecondaryText
                title="Create adventure with your friends"
                style={styles.adventure.subtitle}
              />
            </View>
            <TouchableOpacity
              style={styles.adventure.button}
              activeOpacity={0.6}>
              <ArrowIcon
                style={styles.adventure.buttonImage}
                width={40}
                height={35}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </HomeScreenHorizontalWrapper>
      {/* Horizontal Carousel */}
      <View style={styles.carousel.container}>
        <HomeScreenHorizontalWrapper style={styles.carousel.textWrapper}>
          <PrimaryText
            title="Recommended Place"
            style={styles.carousel.title}
          />
          <TouchableOpacity activeOpacity={0.6}>
            <SecondaryText title="View All" style={styles.carousel.viewAll} />
          </TouchableOpacity>
        </HomeScreenHorizontalWrapper>
        <ScrollView
          horizontal
          style={styles.carousel.carouselWrapper}
          showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <HomeCarouselCardComponent
                key={index}
                img={item.img}
                rating={item.rating}
                subtitle={item.subtitle}
                title={item.title}
              />
            );
          })}
        </ScrollView>
      </View>
      {/* Friends */}
      {/* <HomeScreenHorizontalWrapper>
        <View>
          <PrimaryText title="Your Friends" />
          <Text>
            <SecondaryText title="You have" />
            23
            <SecondaryText title="friends" />
          </Text>
        </View>
        <View>
          <View>
            <Image source={require('../../assets/images/friend-1.png')} />
          </View>
          <View>
            <Image source={require('../../assets/images/friend.png')} />
          </View>
          <View>
            <PrimaryText title="21+" />
          </View>
        </View>
      </HomeScreenHorizontalWrapper> */}
    </View>
  );
};

const styles = {
  main: StyleSheet.create({
    wrapper: {
      flex: 1,
      gap: 40,
      backgroundColor: '#F9F9F9',
    },
  }),
  nav: StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 30,
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    avatarWrapper: {
      backgroundColor: '#FFC15F',
      borderRadius: 15,
      position: 'relative',
      width: 60,
      height: 60,
      overflow: 'hidden',
    },
    avatar: {
      width: 50,
      height: 55,
      objectFit: 'contain',
      position: 'absolute',
      bottom: -2,
      left: 5,
    },
    textContainer: {
      display: 'flex',
      gap: 3,
    },
    name: {
      fontSize: 19,
    },
    cheering: {
      fontSize: 13,
    },
  }),
  adventure: StyleSheet.create({
    container: {
      marginTop: 10,
      position: 'relative',
    },
    darkedElement: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.17)',
      top: 0,
      left: 0,
      zIndex: 1,
      marginLeft: 15,
      borderRadius: 13,
    },
    backgroundImage: {
      width: '100%',
      height: 305,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    contentWrapper: {
      backgroundColor: '#3AAAA7',
      borderRadius: 15,
      paddingHorizontal: 19,
      paddingVertical: 16,
      margin: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 2,
      ...Platform.select({
        android: {elevation: 6},
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
    },
    textWrapper: {
      gap: 4,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 20,
      fontFamily: 'IBMPlexSans-Medium',
    },
    subtitle: {
      color: '#D2D2D2',
      fontSize: 14,
      fontFamily: 'IBMPlexSans-Light',
    },
    button: {
      backgroundColor: '#FFC15F',
      paddingVertical: 8,
      paddingHorizontal: 6,
      borderRadius: 9,
    },
    buttonImage: {},
  }),
  carousel: StyleSheet.create({
    container: {
      gap: 30,
    },
    textWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
    },
    viewAll: {
      fontSize: 16,
    },
    carouselWrapper: {
      marginVertical: -20,
    },
  }),
};

export default HomeComponentScreen;
