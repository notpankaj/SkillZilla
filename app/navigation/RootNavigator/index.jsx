import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  // const [localProps, setLocalProps] = useState(props);
  // const token = useSelector((s) => s.auth.token);
  // useEffect(() => {
  //   if (token) {
  //     setLocalProps({isLoggedIn: true});
  //   } else {
  //     setLocalProps({isLoggedIn: false});
  //   }
  // }, [token]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* {props.isLoggedIn ? (
        // Auth
        <Stack.Group>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Group>
      ) : (
        // No Auth
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
          )} */}

      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
