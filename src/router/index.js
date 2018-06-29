import React from 'react';
import { 
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";

import Tab1 from '../component/screens/tab1'
import Tab2 from '../component/screens/tab2'
import Tab3 from '../component/screens/tab3'
import SubTab1 from '../component/screens/subTab1'
import Drawer2 from '../component/screens/drawer2'
import Drawer3 from '../component/screens/drawer3'
import AuthLoadingScreen from '../component/screens/authLoadingScreen'
import SignInScreen from '../component/screens/signInScreen'

const renderDrawerIcon = (navigation) => {
    return (
        <Icon name="dehaze"
              color="black"
              size={30}
              style={{padding: 10}}
              onPress={() => navigation.openDrawer()}/>
    );
};


const TabStack1 = createStackNavigator({ 
    Tab1: {
        screen: Tab1,
        navigationOptions: ({navigation}) => ({
            title: "Tab1",
            headerLeft: renderDrawerIcon(navigation)
        }),
    },
    
});

const TabStack2 = createStackNavigator({ 
    Tab2: {
        screen: Tab2,
        navigationOptions: ({navigation}) => ({
            title: "Tab2",
            headerLeft: renderDrawerIcon(navigation)
        }),
    },
});

const TabStack3 = createStackNavigator({ 
    Tab1: {
        screen: Tab3,
        navigationOptions: ({navigation}) => ({
            title: "Tab3",
            headerLeft: renderDrawerIcon(navigation)
        }),
    }
});

const TabBar = createBottomTabNavigator({
    TabStack1: {
        screen: TabStack1,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => {
              return <Icon name="trending-down"
              color={focused ? 'blue' : 'gray'}
              size={25}/>;
            }
        })
    },
    TabStack2: {
        screen: TabStack2,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => {
              return <Icon name="trending-flat"
              color={focused ? 'blue' : 'gray'}
              size={25}/>;
            }
        })
    },
    TabStack3: {
        screen: TabStack3,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => {
              return <Icon name="trending-up"
              color={focused ? 'blue' : 'gray'}
              size={25}/>;
            }
        })
    },
  },
  {
    initialRouteName: "TabStack1"
});

const DrawerStack1 = createStackNavigator({ 
    Drawer1: {
        screen: TabBar,
        navigationOptions: {
            header: null
        }
    }
});

const DrawerStack2 = createStackNavigator({ 
    Drawer2: {
        screen: Drawer2,
        navigationOptions: ({navigation}) => ({
            title: "Drawer2",
            headerLeft: renderDrawerIcon(navigation)
        }),
    }
});

const DrawerStack3 = createStackNavigator({ 
    Drawer3: {
        screen: Drawer3,
        navigationOptions: ({navigation}) => ({
            title: "Drawer3",
            headerLeft: renderDrawerIcon(navigation)
        }),
    }
});

const DrawerNavigation = createDrawerNavigator({
    TabBar: {
        screen: DrawerStack1,
        navigationOptions: () => ({
            drawerLabel: "Drawer 1"
        })
      },
    DrawerStack2: {
      screen: DrawerStack2,
      navigationOptions: () => ({
        drawerLabel: "Drawer 2"
        })  
    },
    DrawerStack3: {
      screen: DrawerStack3,
      navigationOptions: () => ({
        drawerLabel: "Drawer 3"
        })
    },
  },
  {
    initialRouteName: "TabBar"
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppStack = createStackNavigator({ 
    DrawerNavigation: {
        screen: DrawerNavigation,
        navigationOptions: {
            header: null
        }
    },
    SubTab1: {
        screen: SubTab1,
        navigationOptions: {
            title: "Sub Tab1",
        }
    },
})

export default createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );