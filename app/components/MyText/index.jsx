import React from 'react';
import {Text, TextProps, StyleProp, TextStyle} from 'react-native';
import {FONT_SIZE} from '../../styles';

export const MyText = ({
  children,
  style,
  bold,
  size,
  color,
  center,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[
        {
          fontSize: size ? size : FONT_SIZE.base,
          fontWeight: bold,
          color: color ? color : '#222',
          textAlign: center ? 'center' : 'auto',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
