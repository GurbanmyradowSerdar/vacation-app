import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import PrimiryText from '../../components/text/PrimiryText';
import SecondaryText from '../../components/text/SecondaryText';
import {IStartComponentInterface} from '../../types';

const StartComponentScreen = ({handleOnClick}: IStartComponentInterface) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4, ...styles.imageContainer}}>
        <Image
          source={require('../../assets/images/man-on-bicycle.png')}
          style={styles.image}
        />
      </View>
      <View id="dots" style={styles.dotsContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.textContent}>
          <PrimiryText title="Planning Your Next Vacation" />
          <SecondaryText
            style={{textAlign: 'center'}}
            title="Escape to paradise. Unwind, relax, and rejuvenate on your dream vacation. Book now for an unforgettable getaway!"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleOnClick}>
          <Text style={styles.buttonText}>Expore Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
  },
  imageContainer: {
    backgroundColor: '#CBEFFF',
    display: 'flex',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {width: '100%', height: '85%'},
  dotsContainer: {
    flex: 0.02,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 30,
  },
  dotActive: {
    backgroundColor: '#FFC15F',
    width: 15,
    height: 15,
    borderRadius: 100,
  },
  dot: {backgroundColor: '#DEE1E3', width: 15, height: 15, borderRadius: 100},
  mainContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.47,
    gap: 30,
    width: '80%',
  },
  textContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: '#FFC15F',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 16,
    color: '#232121',
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
});

export default StartComponentScreen;
