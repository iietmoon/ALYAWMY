import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import AppStack from '../Routes/AppStack';
import DrawerContent from '../Routes/DrawerContent';


const RootNavigator = createDrawerNavigator({
    AppStack: {
        screen: AppStack,
        navigationOptions: {
          headerShown: false,
        }
      }
    },
    {  
      contentComponent: DrawerContent,
      drawerWidth: 250,
      drawerBackgroundColor: '#fff',

    }
      
);

export default createAppContainer(RootNavigator);