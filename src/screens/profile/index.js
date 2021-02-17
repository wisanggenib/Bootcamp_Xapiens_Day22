import React, { useEffect } from "react";
import { ActivityIndicator, Button, Text, TouchableOpacity, View } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from "../../features/product/actions";
import { fetchUser } from "../../features/user/actions";
import { logOut } from "../../features/auth/actions";

const ProfileScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const loading = useSelector((state) => {
        return state.user.isLoading
    })

    const tempUser = useSelector((state) => {
        return state.user.tempUser
    })

    useEffect(() => {
        dispatch(fetchUser())
        console.log('load Profile')
    }, [])

    return (
        <View style={{ flex: 1, padding: 15 }}>
            {loading ?
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator size='large' color='green' />
                </View>
                :
                <>
                    <View style={{ flex: 1 }}>
                        <Text>{tempUser.full_name}</Text>
                        <Text>{tempUser.email}</Text>
                        <Text>{tempUser.phone_number}</Text>
                        <View style={{ alignItems: 'center', marginTop: 100 }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'center', alignItems: 'center', padding: 20, width: 150, backgroundColor: 'green', borderRadius: 50 }}
                                onPress={() => dispatch(fetchProduct())}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>All Product</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Button
                            color='red'
                            title='Log Out'
                            onPress={() => dispatch(logOut())}
                        />
                    </View>
                </>
            }
        </View>
    )
}

export default ProfileScreen