import React, {useEffect} from 'react';
import {StatusBar, View, I18nManager} from 'react-native';

import './global.css';
import { AppNavigator } from './app/constants/AppNavigator';
import { setI18nConfig, isRTL } from './app/assets/translation/i18n';

function App(): React.JSX.Element {
  useEffect(() => {
    // Initialize localization
    setI18nConfig();
    
    // Set RTL layout if Arabic is selected
    const shouldBeRTL = isRTL();
    if (I18nManager.isRTL !== shouldBeRTL) {
      I18nManager.allowRTL(shouldBeRTL);
      I18nManager.forceRTL(shouldBeRTL);
    }
  }, []);

  return (
    <View className="flex-1">
      <StatusBar barStyle={'light-content'} />
      <AppNavigator />
    </View>
  );
}

export default App;
