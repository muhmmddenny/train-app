import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Homescreen from './screen/Homescreen';
import Tiketscreen from './screen/Tiketscreen';
import HasilPencarian from './screen/HasilPenacarian';
import PemesananScreen from './screen/PemesananScrenn';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Homescreen' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Homescreen" component={NavigationTab} />
                <Stack.Screen name="TiketScreen" component={Tiketscreen} />
                <Stack.Screen name="HasilPencarian" component={HasilPencarian} />
                <Stack.Screen name="PemesananScreen" component={PemesananScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function NavigationTab() {
    return (
        <Tab.Navigator
            activeColor="black"
            barStyle={{ backgroundColor: '#FFFF' }}
        >
            <Tab.Screen
                name="HomeTab"
                component={Homescreen}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="train" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="TiketTab"
                component={Tiketscreen}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="ticket-account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default Navigation;