import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Component/Navbar';

const Liste = ({ navigation }) => {

    const [users, setUser] = useState([]);

    const addUser = newUser => {

        setUser([...users, newUser]);
    };

    const handleAddUser = () => {
        navigation.navigate('Add User', { addUser: addUser });
    };

    const handleClear = () => {
        setUser([]);
    };

    return (
        <View>
            {users.map(user => (
                <View>
                    <Text>
                        {user.nom} {user.prenom}
                    </Text>
                </View>
            ))}
            <Button title="Nouvel utilisateur" onPress={handleAddUser} />
            <Button title="Vider" onPress={handleClear} />
        </View>
    );
};

export default Liste;
