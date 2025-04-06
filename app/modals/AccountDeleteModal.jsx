import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp, wp} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {MyText} from '../components/MyText';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {logOut} from '../redux/feature/auth/authSlice';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import {BASE_URL} from '../api';

const DeleteAccountModal = ({visible, onClose}) => {
  const {token, user} = useSelector(s => s.auth);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      setLoading(true);
      const {data} = await axios.delete(
        `${BASE_URL}/api/v1/userDelete/${user?._id}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      showMessage({type: 'info', message: data?.message});
      dispatch(logOut());
      onClose();
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {}}
            style={{
              width: '90%',
              backgroundColor: COLORS.white,
              borderRadius: 10,
              padding: 20,
              borderTopColor: COLORS.red,
              borderTopWidth: hp(1),
              paddingTop: hp(6),
            }}>
            <View
              style={{
                width: wp(15),
                height: wp(15),
                backgroundColor: COLORS.red,
                borderRadius: wp(15),
                position: 'absolute',
                top: -wp(8.5),
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="delete" color={COLORS.white} size={wp(8)} />
            </View>
            <MyText
              color={COLORS.black}
              center
              size={FONT_SIZE['1.5xl']}
              bold={FONT_WEIGHT.bold}>
              Delete Account ?
            </MyText>

            <View style={{marginHorizontal: 'auto', marginVertical: hp(1)}}>
              <MyText color={COLORS.grey} size={FONT_SIZE.base}>
                - Profile
              </MyText>
              <MyText color={COLORS.grey} size={FONT_SIZE.base}>
                - messages
              </MyText>
              <MyText color={COLORS.grey} size={FONT_SIZE.base}>
                - photos
              </MyText>
            </View>

            <View
              style={{flexDirection: 'row', gap: wp(5), marginTop: hp(1.5)}}>
              <TouchableOpacity
                onPress={onClose}
                style={{
                  backgroundColor: COLORS.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp(6),
                  borderRadius: 10,
                  flex: 1,
                  borderColor: COLORS.lightGrey,
                  borderWidth: 1,
                }}>
                <MyText
                  size={FONT_SIZE.l}
                  bold={FONT_WEIGHT.semibold}
                  color={COLORS.grey}>
                  Cancel
                </MyText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleDelete();
                }}
                style={{
                  backgroundColor: COLORS.red,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: hp(6),
                  borderRadius: 10,
                  flex: 1,
                }}>
                {loading ? (
                  <ActivityIndicator size={'small'} color={COLORS.white} />
                ) : (
                  <MyText
                    size={FONT_SIZE.l}
                    bold={FONT_WEIGHT.semibold}
                    color={COLORS.white}>
                    Delete Account
                  </MyText>
                )}
              </TouchableOpacity>
            </View>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DeleteAccountModal;
