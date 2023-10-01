import {TextStyle} from 'react-native';

export interface IPrimaryTextInterface {
  title: string;
  style?: TextStyle;
}

export interface ISecondaryTextInterface {
  title: string;
  style?: TextStyle;
}

export interface IStartComponentInterface {
  handleOnClick: () => void;
}

export interface IHomeCarouselCardInterface {
  img: string;
  title: string;
  subtitle: string;
  rating: number;
  onCardPress?: () => void;
}
