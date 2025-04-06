import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {COLORS, hp} from '../../styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const MainLayout = ({headerComp, children, containerStyle, wrapperStyle}) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: hp(1.5) + inset.top,
          backgroundColor: COLORS.white,
        },
        wrapperStyle,
      ]}>
      <SafeAreaView />
      {headerComp}
      <View style={[{flex: 1, marginHorizontal: 20}, containerStyle]}>
        {children}
      </View>
    </View>
  );
};

export default MainLayout;
