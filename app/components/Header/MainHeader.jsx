import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MyText} from '../MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONT_WEIGHT} from '../../styles';

const MainHeader = ({
  onBack,
  title,
  iconContainerStyle,
  rightIconContainerStyle,
  rightIcon,
  leftIcon,
}) => {
  return (
    <View
      style={{
        width: '100%',
        paddingBottom: 10,
      }}>
      <TouchableOpacity
        disabled={Boolean(leftIcon)}
        style={[
          {position: 'absolute', left: 20, zIndex: 10},
          iconContainerStyle,
        ]}
        onPress={onBack}>
        {leftIcon || (
          <Entypo name="chevron-left" size={24} color={COLORS.black} />
        )}
      </TouchableOpacity>
      <MyText center bold={FONT_WEIGHT.semibold} color={COLORS.black}>
        {title?.toUpperCase()}
      </MyText>
      <View
        style={[
          {position: 'absolute', right: 5, zIndex: 10},
          rightIconContainerStyle,
        ]}>
        {rightIcon}
      </View>
    </View>
  );
};

export default MainHeader;
