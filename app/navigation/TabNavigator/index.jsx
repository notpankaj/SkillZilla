// import React, {useEffect, useState} from 'react';
// import {StyleSheet, TouchableOpacity, View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../screens/Home';
// import {COLORS, FONT_SIZE, hp, wp} from '../../styles';
// import {MyText} from '../../components/MyText';
// import {useDispatch, useSelector} from 'react-redux';
// // import NetInfo from '@react-native-community/netinfo';
// import WishlistScreen from '../../screens/Wishlist';
// import OrderScreen from '../../screens/Order';
// import ProfileScreen from '../../screens/Profile';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {RootState} from '../../redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {LOCAL_KEYS} from '../../utils/local-storage';
// import {setCart} from '../../redux/feature/cart/cartSlice';
// import {
//   fetchAddressList,
//   setSelectedAddress,
// } from '../../redux/feature/address/addressSlice';
// import {unwrapResult} from '@reduxjs/toolkit';
// import {api_getCart, api_SyncCart} from '../../api/cart';

// function CommingSoon() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <MyText color={COLORS.skyblue}>Coming Soon</MyText>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export const TAB_BAR_HEIGHT = hp(9);
// const CustomTabBar = ({state, descriptors, navigation}: any) => {
//   return (
//     <View
//       style={{
//         height: TAB_BAR_HEIGHT,
//         width: wp(90),
//         backgroundColor: COLORS.white,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         paddingHorizontal: wp(2),
//         alignItems: 'center',
//         borderColor: COLORS.lightGrey,
//         borderWidth: 0.5,
//         position: 'absolute',
//         bottom: hp(3),
//         borderRadius: wp(30),
//       }}>
//       {state.routes.map((route: any, index: number) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             key={index}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{
//               flex: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: isFocused ? COLORS.white : COLORS.transparent,
//               borderRadius: hp(4),
//               height: hp(6),
//             }}>
//             {index === 0 && (
//               <View
//                 style={[
//                   tabItemStyles.container,
//                   {backgroundColor: isFocused ? '#e8ffe3' : COLORS.white},
//                 ]}>
//                 {isFocused ? (
//                   <Ionicons name="home" color={COLORS.darkPrimary} size={24} />
//                 ) : (
//                   <Ionicons
//                     name="home-outline"
//                     color={COLORS.black}
//                     size={24}
//                   />
//                 )}
//                 {/* <MyText color={COLORS.black} size={FONT_SIZE.sm}>
//                   Home
//                 </MyText> */}
//                 {/* {isFocused && <View style={styles.underBoder} />} */}
//               </View>
//             )}
//             {index === 1 && (
//               <View
//                 style={[
//                   tabItemStyles.container,
//                   {backgroundColor: isFocused ? '#e8ffe3' : COLORS.white},
//                 ]}>
//                 {isFocused ? (
//                   <AntDesign
//                     name="heart"
//                     color={COLORS.darkPrimary}
//                     size={24}
//                   />
//                 ) : (
//                   <AntDesign name="hearto" color={COLORS.black} size={24} />
//                 )}
//                 {/* <MyText color={COLORS.black} size={FONT_SIZE.sm}>
//                   Wishlist
//                 </MyText>
//                 {isFocused && <View style={styles.underBoder} />} */}
//               </View>
//             )}
//             {index === 2 && (
//               <View
//                 style={[
//                   tabItemStyles.container,
//                   {backgroundColor: isFocused ? '#e8ffe3' : COLORS.white},
//                 ]}>
//                 {isFocused ? (
//                   <MaterialCommunityIcons
//                     name="truck-delivery"
//                     color={COLORS.darkPrimary}
//                     size={24}
//                   />
//                 ) : (
//                   <MaterialCommunityIcons
//                     name="truck-delivery-outline"
//                     color={COLORS.black}
//                     size={24}
//                   />
//                 )}
//                 {/* <MyText color={COLORS.black} size={FONT_SIZE.sm}>
//                   Order
//                 </MyText>
//                 {isFocused && <View style={styles.underBoder} />} */}
//               </View>
//             )}
//             {index === 3 && (
//               <View
//                 style={[
//                   tabItemStyles.container,
//                   {backgroundColor: isFocused ? '#e8ffe3' : COLORS.white},
//                 ]}>
//                 {isFocused ? (
//                   <FontAwesome
//                     name="user"
//                     color={COLORS.darkPrimary}
//                     size={24}
//                   />
//                 ) : (
//                   <FontAwesome name="user-o" color={COLORS.black} size={24} />
//                 )}
//                 {/* <MyText color={COLORS.black} size={FONT_SIZE.sm}>
//                   Profile
//                 </MyText>
//                 {isFocused && <View style={styles.underBoder} />} */}
//               </View>
//             )}
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// const tabItemStyles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     height: wp(12),
//     width: wp(12),
//     borderRadius: wp(12),
//   },
// });

// const TabNavigator = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((s: RootState) => s.cart.items);
//   const {token} = useSelector((s: RootState) => s.auth);
//   const {selectedAddress} = useSelector((s: RootState) => s.address);
//   const [cartSyncEnable, setCartSyncEnable] = useState(false);

//   const apiCartSync = async (cartItems: any[]) => {
//     // console.warn('apiCartSync()....');
//     if (!token) return;
//     // console.warn('CART SYNCING....');
//     const data: any = cartItems.map((item: any) => {
//       let obj = {
//         variant_id: item?.variant_id,
//         qty: item.qty,
//         product_id: item.product_id,
//       };
//       return obj;
//     });
//     console.log(data, 'data');

//     try {
//       const res = await api_SyncCart({body: data, token, signal: null});
//       if (res.status === 'failed') {
//         throw new Error(res?.message);
//       }
//       // console.warn('CART SYNCING.... RES----', res);
//     } catch (error) {
//       // console.warn('CART SYNCING.... ERROR----', error);
//     }
//   };
//   // CART SYNC - BACKEND
//   useEffect(() => {
//     console.log(cartItems, 'cartItems CHANGE:::');

//     if (!cartSyncEnable) return;
//     AsyncStorage.setItem(LOCAL_KEYS.cart, JSON.stringify(cartItems));
//     apiCartSync(cartItems);
//   }, [cartItems]);

//   // GET CART - NOT LOGIN AND  LOGIN
//   useEffect(() => {
//     const go = async () => {
//       if (token) {
//         try {
//           const res = await api_getCart({token});
//           console.log('api_getCart RES', res);
//           if (res?.cart?.length > 0) {
//             dispatch(setCart(res.cart));
//           }
//         } catch (error) {
//           console.log('api_getCart Error:', error);
//         } finally {
//           setCartSyncEnable(true);
//         }
//       } else {
//         AsyncStorage.getItem(LOCAL_KEYS.cart)
//           .then(data => {
//             if (data) {
//               try {
//                 const localCart = JSON.parse(data);
//                 dispatch(setCart(localCart));
//               } catch (error) {
//                 console.log(error);
//               }
//             }
//           })
//           .finally(() => {
//             setCartSyncEnable(true);
//           });
//       }
//     };

//     go();
//   }, []);

//   // ADDRESS GET
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // @ts-ignore
//         const resultAction: any = await dispatch(fetchAddressList({token}));
//         const payload = unwrapResult(resultAction);
//         console.log(payload, 'unwrapResult');
//         if (!selectedAddress && payload?.length > 0) {
//           const res = await AsyncStorage.getItem(LOCAL_KEYS.selectedAddress);
//           if (!res) return;
//           const localAddress = JSON.parse(res);
//           payload.forEach((item: any) => {
//             if (item?.id === localAddress?.id) {
//               dispatch(setSelectedAddress(item));
//             }
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         animation: 'shift',
//       }}
//       tabBar={props => {
//         return (
//           <View
//             style={{
//               backgroundColor: COLORS.white,
//               position: 'absolute',
//               bottom: 0,
//               alignSelf: 'center',
//               paddingBottom: hp(2),
//             }}>
//             <CustomTabBar {...props} />
//           </View>
//         );
//       }}>
//       <Tab.Screen name="HomeTab" component={HomeScreen} />
//       <Tab.Screen name="WishlistTab" component={WishlistScreen} />
//       <Tab.Screen name="OrderTab" component={OrderScreen} />
//       <Tab.Screen name="ProfileTab" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

// const styles = StyleSheet.create({
//   underBoder: {
//     width: wp(10),
//     height: 3,
//     backgroundColor: COLORS.lightPrimary,
//     position: 'absolute',
//     bottom: -hp(1.8),
//   },
// });
