import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyText} from '../MyText';
import {FONT_WEIGHT, hp} from '../../styles';

const InputWrapper = ({children, title}) => {
  return (
    <View style={{gap: hp(0.5), marginVertical: hp(0.5)}}>
      <MyText bold={FONT_WEIGHT.semibold}>{title}</MyText>
      {children}
    </View>
  );
};

export default InputWrapper;

const styles = StyleSheet.create({});
