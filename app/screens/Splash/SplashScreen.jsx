import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} color={COLORS.primary} />
    </View>
  );
};

export default SplashScreen;
