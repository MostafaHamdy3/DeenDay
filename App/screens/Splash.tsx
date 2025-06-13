import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

import {ScreenProps} from '../types/navigation';
import i18n from '../assets/translation/i18n';

const Splash = ({navigation}: ScreenProps<'Splash'>) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View className={container}>
      <Image
        source={require('../assets/icons/DeenDayLogo.png')}
        className={logoStyle}
        resizeMode="contain"
      />
      <Text className={projectDesc}>{i18n.t('appName')}</Text>
    </View>
  );
};

const container = 'flex-1 bg-bgScreen items-center justify-center';
const logoStyle = 'w-40 h-40 mb-6';
const projectDesc = 'text-white font-enMd text-xl';

export default Splash;
