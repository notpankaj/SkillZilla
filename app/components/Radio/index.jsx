import {StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS, wp} from '../../styles';

type Props = {
  isActive: boolean;
  onPress?: () => void;
};
const Radio = ({isActive, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: wp(5),
        height: wp(5),
        borderRadius: wp(5),
        borderWidth: 1,
        borderColor: COLORS.grey,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isActive && (
        <View
          style={{
            backgroundColor: COLORS.darkPrimary,
            width: wp(3),
            height: wp(3),
            borderRadius: wp(3),
          }}></View>
      )}
    </TouchableOpacity>
  );
};

export default Radio;

const styles = StyleSheet.create({});
