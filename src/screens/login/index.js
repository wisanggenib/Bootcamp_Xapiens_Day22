import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { login, doLogin } from "../../features/auth/actions";

const LoginScreen = ({ navigation }) => {

    const loading = useSelector((state) => {
        return state.auth.isLoading
    })

    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log('Load Login')
    return (
        <View style={{ padding: 30 }}>
            <Text>Username</Text>
            <TextInput
                style={{ borderWidth: 1, borderColor: 'black', marginBottom: 10, padding: 15 }}
                placeholder="Write Username"
                onChangeText={text => setUsername(text)}
                defaultValue={username}
            />
            <Text>Password</Text>
            <TextInput
                style={{ borderWidth: 1, borderColor: 'black', marginBottom: 20, padding: 15 }}
                placeholder="Write Password"
                onChangeText={text => setPassword(text)}
                defaultValue={password}
                secureTextEntry={true}
            />
            {/* <Button
                title="LOGIN NOW"
                onPress={() => dispatch(doLogin(username, password))}
            /> */}
            <View style={{ justifyContent: 'space-evenly', padding: 10, flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'green', alignItems: 'center', borderRadius: 10, padding: 15, width: 100 }}
                    onPress={() => dispatch(doLogin(username, password))}
                >
                    {loading ? <ActivityIndicator size='large' color='red' /> : <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>}
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'orange', alignItems: 'center', borderRadius: 10, padding: 15, width: 100 }}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }} >Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default LoginScreen