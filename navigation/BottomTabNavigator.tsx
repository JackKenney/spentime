import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TrendsScreen from '../screens/TrendsScreen';
import TimeScreen from '../screens/TimeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabParamList, TrendsParamList, TimeParamList, SettingsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Time"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Trends"
        component={TrendsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Time"
        component={TimeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="stopwatch" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TrendsStack = createStackNavigator<TrendsParamList>();

function TrendsNavigator() {
  return (
    <TrendsStack.Navigator>
      <TrendsStack.Screen
        name="TrendsScreen"
        component={TrendsScreen}
        options={{ headerTitle: 'Trends' }}
      />
    </TrendsStack.Navigator>
  );
}

const TimeStack = createStackNavigator<TimeParamList>();

function TimeNavigator() {
  return (
    <TimeStack.Navigator>
      <TimeStack.Screen
        name="TimeScreen"
        component={TimeScreen}
        options={{ headerTitle: 'Time' }}
      />
    </TimeStack.Navigator>
  );
}


const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </SettingsStack.Navigator>
  );
}
