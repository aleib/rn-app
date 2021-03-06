/*
https://docs.expo.io/versions/v19.0.0/guides/push-notifications.html
https://github.com/expo/simple-rails-push-server-example

https://rn-push.herokuapp.com/tokens
https://dashboard.heroku.com/apps/rn-push
*/

import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'https://rn-push.herokuapp.com/tokens';

export async function registerForPushNotificationsAsync() {
  const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    console.log('no permissions')
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  // console.log(token)

  const body = JSON.stringify({
      token: {
        value: token,
      },
      user: {
        username: 'Alex',
      },
    })
  console.log(body)

  // POST the token to our backend so we can use it to send pushes from there
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body,
  });
}