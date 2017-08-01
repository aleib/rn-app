import { DrawerNavigator } from 'react-navigation';

import HomeView from '../screens/HomeView';
import FirebaseView from '../screens/FirebaseView';
import PushView from '../screens/PushView';

export default DrawerNavigator({
  Home: { screen: HomeView },
  Firebase: { screen: FirebaseView },
  Push: { screen: PushView },
});
