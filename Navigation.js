import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//icons
import { FontAwesome } from '@expo/vector-icons';

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
                options={{
                    tabBarLabel: 'Pagina principal',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Gender"
                component={Gender}
                options={{
                    tabBarLabel: 'Genero',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="transgender" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Age"
                component={Age}
                options={{
                    tabBarLabel: 'Edad',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="users" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="University"
                component={University}
                options={{
                    tabBarLabel: 'Universidad',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="university" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Weather"
                component={Weather}
            />

            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'Sobre mi',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="info-circle" size={24} color={color} />
                    ),
                }}
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