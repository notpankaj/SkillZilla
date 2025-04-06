import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, hp, wp} from '../../styles';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';

const MenuBtn = ({onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{top: -hp(0.5)}}
      onPress={() => {
        SheetManager.show(SHEETS.MenuSheet);
        return;
        if (onPress) {
          onPress();
        } else {
          navigation.toggleDrawer();
        }
      }}>
      <Entypo name="menu" size={wp(8)} color={COLORS.lightPrimary} />
    </TouchableOpacity>
  );
};

export default MenuBtn;
