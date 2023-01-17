import React from 'react';
// import { View } from "react-native";
// import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Fontisto } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons'; 
// import { Entypo } from '@expo/vector-icons'; 
import PencarianScreen from './screen/PencarianScreen';
import TiketScreen from './screen/TiketScreen';
// import HomeScreen from './screen/HomeScreen';
import HasilScreen from './screen/HasilScreen';
import PemesananScreen from './screen/PemesananScreen';
// import TambahTiketScreen from './screen/TambahTiketScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'PencarianScreen'} screenOptions={{headerShown:false}}>
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
          <Stack.Screen name="PencarianScreen" component={NavigationTab} />
          <Stack.Screen name="TiketScreen" component={TiketScreen} />
          <Stack.Screen name="HasilScreen" component={HasilScreen} />
          <Stack.Screen name="PemesananScreen" component={PemesananScreen} />
          {/* <Stack.Screen name="TambahTiketScreen" component={TambahTiketScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

function NavigationTab() {
    return (
      <Tab.Navigator
        activeColor="white"
        barStyle={{ backgroundColor: '#2B9FDC' }}
      >
        <Tab.Screen
          name="HomeTab"
          component={PencarianScreen}
          options={{
            tabBarLabel: false,
            tabBarIcon: ({color}) => (
            <MaterialIcons name="train" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="TiketTab"
          component={TiketScreen}
          options={{
            tabBarLabel: false,
            tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="ticket-account" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="BukuTab"
          component={BukuScreen}
          options={{
            tabBarLabel: 'Buku',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="file" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingTab"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    );
}

export default Navigation;