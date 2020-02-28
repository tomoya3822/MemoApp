import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import firebase from 'firebase';

import ENV from './env.json';

const firebaseConfig = {
  apiKey:               ENV.FIREBASE_API_KEY,
  authDomain:           ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:          ENV.FIREBASE_DB_URL,
  projectId:            ENV.FIREBASE_PJ_ID,
  storageBucket:        ENV.FIREBASE_STORAGE,
  messagingSenderId:    ENV.FIREBASE_MSR_ID,
  appId:                ENV.FIREBASE_APP_ID,
  measurementId:        ENV.FIREBASE_MSR_ID,
};
firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoEdit:   { screen: MemoEditScreen },
  MemoDetail: { screen: MemoDetailScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      color: '#fff',
      fontSize: 20,
    },
  },
});

export default createAppContainer(AppNavigator);
