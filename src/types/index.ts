import {TextStyle, ViewStyle} from 'react-native';

// ! common used components
export interface IPrimaryTextInterface {
  title: string;
  style?: TextStyle;
}

export interface ISecondaryTextInterface {
  title: string;
  style?: TextStyle;
}

// ! start screen
export interface IStartComponentInterface {
  handleOnClick: () => void;
}

// ! component home
export interface IHomeCarouselCardInterface {
  img: string;
  title: string;
  subtitle: string;
  rating: number;
  onCardPress: (img: string, name: string, rating: number) => void;
}

export interface IHomeHorizontalWrapperInterface {
  style?: ViewStyle;
  children: React.ReactNode;
}

// ! props of home components screen
export interface IHomeComponentInteface {
  onCardPress: (img: string, name: string, rating: number) => void;
}

// ! holiday screen props
export interface IHolidayComponentInteface {
  imgSource: string;
  rating: number;
  name: string;
  pressBackButton: () => void;
}
