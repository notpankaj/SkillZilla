import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {COLORS} from './app/styles';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, store} from './app/redux';
import FlashMessage from 'react-native-flash-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './app/sheets/sheets';
import {SheetProvider} from 'react-native-actions-sheet';
import RootNavigator from './app/navigation/RootNavigator';
import SplashScreen from './app/screens/Splash/SplashScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS} from './app/utils';
import {setAuth} from './app/redux/feature/auth/authSlice';

const AppInit = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  const [showOnboarding, setShowOnboarding] = useState(null);
  // const {token} = useSelector(state => state.auth);

  useEffect(() => {
    async function initializeApp() {
      try {
        // const hasSeenOnboarding = await AsyncStorage.getItem(
        //   LOCAL_KEYS.HAS_SEEN_ONBOARDING,
        // );
        // const checkLoginPromise = (async () => {
        //   const localToken = await AsyncStorage.getItem(LOCAL_KEYS.TOKEN);
        //   const localUser = await AsyncStorage.getItem(LOCAL_KEYS.USER);
        //   if (localToken && localUser) {
        //     const parsedUser = JSON.parse(localUser);
        //     dispatch(setAuth({token: localToken, user: parsedUser}));
        //   }
        // })();
        // await Promise.all([checkLoginPromise]);
        // setShowOnboarding(hasSeenOnboarding !== 'true');
      } catch (error) {
        // console.log('Error: ', error);
      } finally {
        setTimeout(() => {
          setIsReady(true);
        }, 300);
      }
    }

    initializeApp();
  }, [dispatch]);

  // const completeOnboarding = async () => {
  //   await AsyncStorage.setItem(LOCAL_KEYS.HAS_SEEN_ONBOARDING, 'true');
  //   setShowOnboarding(false);
  // };

  if (!isReady) return <SplashScreen />;
  // if (showOnboarding)
  //   return <OnboardingScreen onComplete={completeOnboarding} />;
  return <RootNavigator isLoggedIn={true} />;
};

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <GestureHandlerRootView
          style={{
            flex: 1,
          }}>
          <StatusBar translucent backgroundColor={COLORS.transparent} />
          <NavigationContainer>
            <Provider store={store}>
              <SheetProvider context="global">
                <AppInit />
              </SheetProvider>
            </Provider>
          </NavigationContainer>
          <FlashMessage position="top" statusBarHeight={30} />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </React.Fragment>
  );
};

export default App;
