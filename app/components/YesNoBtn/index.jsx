import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {MyText} from '../MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';

const YesNoBtn = ({text, onPress, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: hp(6),
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: COLORS.lightGrey,
          borderRadius: 5,
          alignSelf: 'center',
        },
        containerStyle,
      ]}
      onPress={onPress}>
      <MyText
        color={COLORS.lightPrimary}
        bold={FONT_WEIGHT.semibold}
        size={FONT_SIZE.xl}
        style={textStyle}>
        {text}
      </MyText>
    </TouchableOpacity>
  );
};

export default YesNoBtn;
