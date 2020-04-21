import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import AppStack from '../Routes/AppStack';


const RootNavigator = createDrawerNavigator({
    AppStack: {
        screen: AppStack,
        navigationOptions: {
          headerShown: false,
        }
      },
});

export default createAppContainer(RootNavigator);