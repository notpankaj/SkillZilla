import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import {ActivityIndicator} from 'react-native';
import {MyText} from '../MyText';

const PrimaryBtn = ({loading, title, onPress, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={[
        {
          height: hp(6),
          width: '100%',
          backgroundColor: COLORS.darkPrimary,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        },
        containerStyle,
      ]}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} size={'small'} />
      ) : (
        <MyText
          color={COLORS.white}
          size={FONT_SIZE.l}
          bold={FONT_WEIGHT.medium}
          style={textStyle}>
          {title}
        </MyText>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({});
