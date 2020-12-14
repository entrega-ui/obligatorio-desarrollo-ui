import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '_actions/UserActions';
import AppNavigator from '_navigation/AppNavigator';
import AuthNavigator from '_navigation/AuthNavigator';
import { getUser } from '_selectors/UserSelectors';
import { theme } from '_theme';

const RootNavigator = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(me)
  }, [me])

  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;