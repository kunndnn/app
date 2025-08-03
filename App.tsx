/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// imports for fcm notification start
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import notifee, {AndroidImportance} from '@notifee/react-native';
// imports for fcm notification end

import {Todos} from './src/modules/Todos';

function App(): React.JSX.Element {
  // fcm notification script start
  useEffect(() => {
    // Request permission
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken();
      }
    };

    // Get FCM token
    const getFcmToken = async () => {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('FCM Token:', fcmToken);
      } else {
        console.warn('Failed to get FCM token');
      }
    };

    requestPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));

      await notifee.requestPermission();

      await notifee.displayNotification({
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        android: {
          channelId: 'default',
          smallIcon: 'ic_launcher', // Ensure this icon exists in android/app/src/main/res
          importance: AndroidImportance.HIGH,
        },
      });
    });

    return unsubscribe;
  }, []);

  // fcm notification script end

  return (
    <>
      <Todos />
    </>
  );
}

export default App;
