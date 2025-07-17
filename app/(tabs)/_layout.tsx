import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
        screenOptions={{
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
                <View style={{ width: 20, height: 20, backgroundColor: color, borderRadius: 10 }} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => (
                <View style={{ width: 20, height: 20, backgroundColor: color, borderRadius: 10 }} />
            ),
        }}
      />
    </Tabs>
  );
}
