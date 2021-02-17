import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from "../../features/product/actions";

const ProductScreens = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state) => {
        return state.product.isLoading
    })

    const product = useSelector((state) => {
        return state.product.product
    })

    const totalPages = useSelector((state) => {
        return state.product.totalPages
    })

    const totalItems = useSelector((state) => {
        return state.product.totalItems
    })

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {loading ?
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator color='red' size='large' />
                </View>
                :
                <View style={{ flex: 1, padding: 20 }}>
                    <Text style={{ marginBottom: 30 }}>List Product</Text>
                    <FlatList
                        style={{ padding: 0 }}
                        data={product}
                        renderItem={
                            ({ item }) =>
                                <View style={{ borderWidth: 1, borderColor: 'black', marginBottom: 15, padding: 5, borderRadius: 10 }}>
                                    <Text>{"Name : " + item.name}</Text>
                                    <Text>{"Content : " + item.price}</Text>
                                    <Text>{"Content : " + item.stock}</Text>
                                </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View>
                        <Text>Total Pages : {totalPages}</Text>
                        <Text>Total Items : {totalItems}</Text>
                    </View>
                </View>
            }
        </View>
    )
}

export default ProductScreens