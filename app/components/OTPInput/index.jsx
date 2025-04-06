import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

const OtpInput = ({setCode}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (!setCode) return;
    setCode(otp);
  }, [otp]);

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          allowFontScaling={false}
          key={index}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={text => handleChangeText(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          value={value}
          ref={ref => (inputRefs.current[index] = ref)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    color: COLORS.black,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default OtpInput;
