import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import RoutesTab from './tabs.routes';
import Detail from '../pages/Detail';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="RoutesTab" component={RoutesTab} />
        <Screen name="Detail" component={Detail} />
      </Navigator>
    </NavigationContainer>
  );
}
