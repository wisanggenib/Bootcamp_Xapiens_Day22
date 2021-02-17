import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../features/auth/actions";

const LoginScreen = () => {
    // const data = { email: 'rin', password: 'rin' }

    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log('Load Login')
    return (
        <View style={{ padding: 10 }}>
            <Text>Login</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1, borderColor: 'black', marginBottom: 10, marginTop: 10 }}
                placeholder="Type here to translate!"
                onChangeText={text => setEmail(text)}
                defaultValue={email}
            />
            <TextInput
                style={{ height: 40, borderWidth: 1, borderColor: 'black', marginBottom: 10 }}
                placeholder="Type here to translate!"
                onChangeText={text => setPassword(text)}
                defaultValue={password}
            />
            <Button
                title="LOGIN NOW"
                onPress={() => dispatch(login())}
            />
        </View>
    )
}
export default LoginScreen