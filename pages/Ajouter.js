import { View, Text, Button } from 'react-native';
import React from 'react';
import Navbar from '../Component/Navbar';


const Ajouter = ({navigation}) => {

    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const {addUser} = route.params || null;

    const handleNom = value => {
        setNom(value);
      };
    
      const handleAge = value => {
        setNom(value);
      };

      const handleSubmit = () => {
        route.params.addUser({
          nom: nom,
          age: age,
        });
        navigation.goBack();
      };

    return (
        <View>
            <Navbar navigation={navigation} />
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={handleNom}
                    value={text}
                />
                <TextInput
                    onChangeText={handleAge}
                    value={text}
                />
            </SafeAreaView>
            <Button
                title="Ajouter"
                onPress={() => {handleSubmit}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Ajouter;
