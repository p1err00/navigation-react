import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Component/Navbar';

const AutrePage = () => {
  return (
    <View>
        <Navbar navigation={navigaiton}/>
      <Text>Ceci est la page autre</Text>
    </View>
  );
};

export default AutrePage;
