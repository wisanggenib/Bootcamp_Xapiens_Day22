import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "../../features/user/actions";

const ProfileScreen = () => {

    const dispatch = useDispatch();

    const loading = useSelector((state) => {
        return state.user.isLoading
    })

    const tempUser = useSelector((state) => {
        return state.user.tempUser
    })

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <View>
            <Text>This is Profile Screen aaa {loading}</Text>
            {loading ?
                <ActivityIndicator size='large' color='green' />
                :
                <>
                    <View>
                        <Text>{JSON.stringify(tempUser)}</Text>
                        <Text>=======</Text>
                        <Text>{tempUser.full_name}</Text>
                        <Text>{tempUser.email}</Text>
                        <Text>{tempUser.phone_number}</Text>
                    </View>
                </>
            }
        </View>
    )
}

export default ProfileScreen