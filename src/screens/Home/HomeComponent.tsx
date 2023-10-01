import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import SecondaryText from '../../components/text/SecondaryText';
import PrimaryText from '../../components/text/PrimaryText';
import {IHomeCarouselCardInterface} from '../../types';
import HomeCarouselCardComponent from '../../components/home/HomeCarouselCardComponent';

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
    <ScrollView>
      <View id="nav">
        <Image source={require('../../assets/images/user.png')} />
        <View>
          <SecondaryText title="Welcome Back 👋" />
          <PrimaryText title="Jhon Radrigaz" />
        </View>
        <Image source={require('../../assets/images/bell.svg')} />
      </View>
      <View id="adventure">
        <ImageBackground source={require('../../assets/images/nature.jpg')}>
          <View>
            <View>
              <PrimaryText title="Start Your Adventure" />
              <SecondaryText title="Create adventure with your friends" />
            </View>
            <TouchableOpacity>
              <Image source={require('../../assets/images/arrow.svg')} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View id="carousel">
        <View>
          <PrimaryText title="Recommended Place" />
          <SecondaryText title="View All" />
        </View>
        <ScrollView horizontal>
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
      <View id="friends">
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});

export default HomeComponentScreen;
