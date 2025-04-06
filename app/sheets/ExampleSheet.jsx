import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {COLORS, hp, wp} from '../styles';
import {SafeAreaView, View} from 'react-native';
import {Pressable} from 'react-native';
import {SHEETS} from './sheets';
const ExampleSheet = props => {
  const close = () => {
    SheetManager.hide(SHEETS.ExampleSheet);
  };

  return (
    <ActionSheet
      keyboardHandlerEnabled
      defaultOverlayOpacity={0.5}
      indicatorStyle={{
        marginTop: 10,
        backgroundColor: '#BFBFBF',
      }}
      id={props.sheetId}
      gestureEnabled>
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: 20,
        }}>
        <SafeAreaView />
        <Pressable
          onPress={() => {
            close();
          }}
          style={{
            height: hp(17),
            width: wp(80),
            backgroundColor: COLORS.white,
            borderRadius: 15,
            overflow: 'hidden',
            flexDirection: 'row',
            marginRight: 10,
          }}></Pressable>
        <SafeAreaView />
      </View>
    </ActionSheet>
  );
};

export default ExampleSheet;
