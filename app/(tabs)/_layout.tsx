import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs
        screenOptions={{
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: '#0c6673',
                borderTopWidth: 1,
                borderTopColor: '#ddd',
                height: 60,
                paddingBottom: 5,
            },
            headerStyle: {
                backgroundColor: '#0c6673'
            }
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
                <Feather name="home" color={"#ffffff"} size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => (
                <Feather name="settings" color={"#ffffff"} size={24} />
            ),
        }}
      />
    </Tabs>
  );
}
