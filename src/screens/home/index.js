import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, TextInput } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getPost, fetchPost } from "../../features/posts/actions";
import { logOut } from "../../features/auth/actions";
const HomeScreen = () => {

    const dispatch = useDispatch()

    const POST = useSelector((state) => {
        return state.post.post
    })

    const POSTS = useSelector((state) => {
        return state.post.posts
    })

    const loading = useSelector((state) => {
        return state.post.isLoading
    })

    console.log('Load Home')
    return (
        <View style={{ padding: 10 }}>
            <Text>Home</Text>
            <Button
                title="Logout"
                onPress={() => dispatch(logOut())}
            />
            <Text>{POST}</Text>
            {loading ? <ActivityIndicator color='red' size='large' /> : <Text>{JSON.stringify(POSTS)}</Text>}
            <Button
                title="Change Post"
                onPress={() => dispatch(fetchPost(3))}
            />
        </View>
    )
}
export default HomeScreen