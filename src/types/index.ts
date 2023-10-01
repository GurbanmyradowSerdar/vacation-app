import {TextStyle} from 'react-native';

export interface IPrimiryTextInterface {
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
