import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "../letgo/src/navigators/RootNavigator"
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports'
import {withAuthenticator} from "aws-amplify-react-native"

Amplify.configure(awsconfig);

LogBox.ignoreAllLogs(true);
function App() {
  return (
      <NavigationContainer> 
        <RootNavigator/>
      </NavigationContainer> 
  );
}
export default withAuthenticator(App)
