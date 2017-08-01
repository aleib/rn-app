import React, {Component} from 'react';
import {
  Notifications,
} from 'expo';
import {
  Text,
  View,
} from 'react-native';

import {registerForPushNotificationsAsync} from '../../setup/push';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PushView extends Component {
  state = {
    notification: {},
  };

  static navigationOptions = {
    drawerLabel: 'Push',
    drawerIcon: () => (<Ionicons name="ios-notifications" size={20} />),
  };

  componentWillMount() {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    consol.log('Notification', notification)
    this.setState({notification: notification});
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
      </View>
    );
  }
};

export default PushView