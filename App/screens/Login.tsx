import React from 'react';
import {Image, Text, View} from 'react-native';

import i18n, {isRTL} from '../assets/translation/i18n';

const Login = () => {
  return (
    <View className={container}>
      <Image
        source={require('../assets/icons/DeenDayLogo.png')}
        className={logoStyle}
      />
      <Text className={`${welcome} ${isRTL() ? 'font-arMd' : 'font-enMd'}`}>
        {i18n.t('welcome')}
      </Text>
      <Text className={titleLogin}>{i18n.t('loginToContinue')}</Text>
    </View>
  );
};

const container = 'flex-1 bg-bgScreen items-center justify-center';
const logoStyle = 'w-40 h-40 mb-4';
const welcome = 'text-white text-3xl mb-2';
const titleLogin = 'text-white text-sm';

export default Login;
