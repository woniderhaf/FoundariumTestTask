import React from 'react';
import Navigation from './src/navigation/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigation/>
    </SafeAreaView>
  );
}

export default App;
