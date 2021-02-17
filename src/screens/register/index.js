import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { doRegister, doLogin } from "../../features/auth/actions";

const RegisterScreen = ({ navigation }) => {

    const loading = useSelector((state) => {
        return state.auth.isLoading
    })

    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    console.log('Load Register')

    return (
        <ScrollView>
            <View style={{ padding: 30 }}>
                <Text>Fullname</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', marginBottom: 10, padding: 15 }}
                    placeholder="Write Full Name"
                    onChangeText={text => setName(text)}
                    defaultValue={name}
                />
                <Text>Username</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', marginBottom: 10, padding: 15 }}
                    placeholder="Write Username"
                    onChangeText={text => setUsername(text)}
                    defaultValue={username}
                />
                <Text>Email</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', marginBottom: 10, padding: 15 }}
                    placeholder="Write Email"
                    onChangeText={text => setEmail(text)}
                    defaultValue={email}
                />
                <Text>Phone Number</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', marginBottom: 10, padding: 15 }}
                    placeholder="Write Phone"
                    onChangeText={text => setPhone(text)}
                    defaultValue={phone}
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
                        style={{ backgroundColor: 'green', alignItems: 'center', borderRadius: 10, padding: 15, width: 150 }}
                        onPress={() => dispatch(doRegister(name, username, password, phone, email))}
                    >
                        {loading ? <ActivityIndicator size='large' color='red' /> : <Text style={{ color: 'white', fontWeight: 'bold' }}>Register Now</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: 'orange', alignItems: 'center', borderRadius: 10, padding: 15, width: 100 }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }} >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
export default RegisterScreen