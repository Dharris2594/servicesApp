/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import './polyfills';

AppRegistry.registerComponent(appName, () => App);
