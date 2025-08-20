// Uses  TypeScript Executable (.tsx) files
//_layout.tsx
// Imports all required libraries, screens, and providers
import * as React from 'react';//Uses the React Library
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native'; // Uses the React Native library
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'; // Uses the Expo library
import { StatusBar } from 'expo-status-bar';
import Home from './home'; // Uses the home.tsx file.
import Settings from './settings';
import { QProvider } from '@/Context/qContext';
import { CProvider } from '@/Context/cContext';
import { PProvider } from '@/Context/pContext';

// Sets Tab as createBottomTabNavigator()
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    // Cretes a Tab Navigator
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          // Creates iconName variable ('let' allows for later change)
          let iconName;
          // if the route (or the selected tab) is Home, then put the filled home icon, else, home outline icon
          if (route.name === 'Home') {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }
          // if the route (or the selected tab) is Settings, then put the filled settings (gear) icon, else, settings outline icon
          return <Ionicons name={iconName} size={30} color={"#000"} />;
        },
        // Sets the header style
        headerStyle: {
          backgroundColor: "#fff",
        },
        // sets the header title
        headerTitleStyle: {
          color: "#000"
        },
        // sets the tab bar style
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      })}
    >
      {/* Renders Tabs when Selected */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator> /* The Tab Navigator, used from one of the react Libraries */
  );
}

export default function App() {
  return (
    <NavigationIndependentTree> {/*NavigationIndependentTree allows for "stacking" of Providers*/}
      <NavigationContainer>
        <QProvider>
          <CProvider>
            <PProvider>
              <MyTabs />{/* Renders Tabs */}
              <StatusBar style={'inverted'} />
            </PProvider>
          </CProvider>
        </QProvider>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
