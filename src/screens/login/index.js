import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { login, doLogin } from "../../features/auth/actions";

const LoginScreen = () => {

    const loading = useSelector((state) => {
        return state.auth.isLoading
    })

    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log('Load Login')
    return (
        <View style={{ padding: 10 }}>
            <Text>Login</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1, borderColor: 'black', marginBottom: 10, marginTop: 10 }}
                placeholder="Type here to translate!"
                onChangeText={text => setUsername(text)}
                defaultValue={username}
            />
            <TextInput
                style={{ height: 40, borderWidth: 1, borderColor: 'black', marginBottom: 10 }}
                placeholder="Type here to translate!"
                onChangeText={text => setPassword(text)}
                defaultValue={password}
            />
            {/* <Button
                title="LOGIN NOW"
                onPress={() => dispatch(doLogin(username, password))}
            /> */}
            <TouchableOpacity
                style={{ backgroundColor: 'orange', borderWidth: 1, borderColor: 'black', padding: 30 }}
                onPress={() => dispatch(doLogin(username, password))}
            >
                {loading ? <ActivityIndicator size='large' color='red' /> : <Text>Login</Text>}
            </TouchableOpacity>
        </View>
    )
}
export default LoginScreen