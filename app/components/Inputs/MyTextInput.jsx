import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp, wp} from '../../styles';
import {MyText} from '../MyText';

const MyTextInput = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  isPassword,
  onBlur,
  onFocus,
  editable = true,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View
      style={{
        height: hp(6),
        backgroundColor: COLORS.white,
        width: '100%',
        marginTop: hp(0.5),
        borderRadius: 5,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
      }}>
      <TextInput
        editable={editable}
        secureTextEntry={isPassword ? secureTextEntry : false}
        placeholderTextColor={COLORS.lightGrey}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        // @ts-ignore
        keyboardType={keyboardType}
        style={{
          fontSize: FONT_SIZE.l,
          paddingHorizontal: wp(2),
          flex: 1,
          color: COLORS.black,
        }}
        value={value}
        onChangeText={onChangeText}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={{position: 'absolute', top: hp(1.5), right: hp(2)}}>
          <MyText color={COLORS.primary} bold={FONT_WEIGHT.medium}>
            {secureTextEntry ? 'show' : 'hide'}
          </MyText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MyTextInput;
