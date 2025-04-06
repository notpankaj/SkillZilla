import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyText} from '../MyText';
import {COLORS, FONT_SIZE} from '../../styles';

const ErrorMsg = ({msg}) => {
  return (
    <View>
      <MyText size={FONT_SIZE.sm} color={COLORS.red}>
        {msg}
      </MyText>
    </View>
  );
};

export default ErrorMsg;

const styles = StyleSheet.create({});
