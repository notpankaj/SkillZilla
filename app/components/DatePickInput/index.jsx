import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {MyText} from '../MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp, wp} from '../../styles';
import {formateDate} from '../../utils';

const DatePickInput = ({date, setDate, mode, maximumDate}) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: hp(6),
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGrey,
        }}
        onPress={() => setOpen(true)}>
        <DatePicker
          modal
          open={open}
          mode={mode || 'date'}
          date={date || new Date()}
          maximumDate={maximumDate}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View
          style={{
            width: '100%',
            paddingHorizontal: wp(2),
          }}>
          <MyText
            size={FONT_SIZE.base}
            color={COLORS.black}
            bold={FONT_WEIGHT.semibold}>
            {date ? formateDate(date) : 'Select Date'}
          </MyText>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default DatePickInput;
