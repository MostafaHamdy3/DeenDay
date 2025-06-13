import React from 'react';
import {StatusBar, Text, View} from 'react-native';

import './global.css';

function App(): React.JSX.Element {
  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <Text className={textStyle}>DeenDay</Text>
    </View>
  );
}

const textStyle = 'text-2xl font-bold text-center mt-10';

export default App;
