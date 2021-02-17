import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab from '../components/Tab';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Categories from '../pages/Categories';

const {Navigator, Screen} = createBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Navigator tabBar={(props) => <Tab {...props} />}>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Categories" component={Categories} />
    </Navigator>
  );
}
