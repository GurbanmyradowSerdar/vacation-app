import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import SecondaryText from '../../components/text/SecondaryText';
import PrimiryText from '../../components/text/PrimiryText';

const HomeComponentScreen = () => {
  return (
    <ScrollView>
      <View>
        <Image source={require('../../assets/images/user.png')} />
        <View>
          <SecondaryText title="Welcome Back 👋" />
          <PrimiryText title="Jhon Radrigaz" />
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
