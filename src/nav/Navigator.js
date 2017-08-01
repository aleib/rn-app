import { DrawerNavigator } from 'react-navigation';

import HomeView from '../screens/HomeView';
import FirebaseView from '../screens/FirebaseView';

export default DrawerNavigator({
  Home: { screen: HomeView },
  Firebase: { screen: FirebaseView },
});
