import { View, Text, Button, TouchableOpacityBase, Pressable } from 'react-native';
import React from 'react';

const Navbar = ({navigation}) => {

    const handleListe = () => {
        navigation.navigate("Liste");
    }

    const handleAjouter = () => {
        navigation.navigate("Ajouter");
    }

  return (
    <View>
      <Text></Text>
        <Pressable
        style={ ({pressed}) => ({
                    background: pressed? 'green' : 'blue'
                })
        }
        onPress={handleListe}
    >
        <Text>Page Home</Text>
    </Pressable>
    <Pressable
        style={ ({pressed}) => ({
                    background: pressed? 'green' : 'blue'
                })
        }
        onPress={handleAjouter}
    >
        <Text>Page Account</Text>
    </Pressable>
    </View>
  );
};

export default Navbar;
