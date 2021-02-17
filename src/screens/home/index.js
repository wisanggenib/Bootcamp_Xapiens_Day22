import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, TextInput } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getPost, fetchPost } from "../../features/posts/actions";
const HomeScreen = () => {

    const dispatch = useDispatch()
    const POST = useSelector((state) => {
        return state.post.post
    })

    console.log('Load Home')
    return (
        <View style={{ padding: 10 }}>
            <Text>Home</Text>
            <Text>{POST}</Text>
            <Button
                title="Change Post"
                onPress={() => dispatch(fetchPost())}
            />
        </View>
    )
}
export default HomeScreen