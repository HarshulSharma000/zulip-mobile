/* eslint-disable */
import Reactotron, { asyncStorage, networking, openInEditor } from 'reactotron-react-native';
import { NativeModules } from 'react-native';

import { reactotronRedux } from 'reactotron-redux';

// uncomment the following lines to test on a device

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0]; //To retrieve scriptURL from device

  console.logs = (text) => Reactotron.log(text,true);

  //Comment out next lines to disable reactotron connection
  Reactotron.configure({ host: scriptHostname, name: "Zulip Mobile" }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .use(asyncStorage())
  .use(networking())
  .use(openInEditor())
  .connect();
}