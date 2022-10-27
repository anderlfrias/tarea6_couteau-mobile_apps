import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens
import About from './screens/About';
import Age from './screens/Age';
import Gender from './screens/Gender';
import HomeScreen from './screens/HomeScreen';
import University from './screens/University';
import Weather from './screens/Weather';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Gender"
                component={Gender}
            />

            <Tab.Screen
                name="Age"
                component={Age}
            />

            <Tab.Screen
                name="University"
                component={University}
            />

            <Tab.Screen
                name="Weather"
                component={Weather}
            />

            <Tab.Screen
                name="About"
                component={About}
            />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}