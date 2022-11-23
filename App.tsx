import SignIn from './src/pages/SignIn';
import { StatusBar, View } from 'react-native';

export default function App() {
  return (
    <View>
      
      <StatusBar barStyle={'light-content'} translucent={false} />
      <SignIn />
    </View>
  );
}


