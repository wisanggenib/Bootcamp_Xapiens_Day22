import React, { useEffect } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from "../../features/product/actions";

const DetailScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const loading = useSelector((state) => {
        return state.product.isLoading
    })

    const detailProduct = useSelector((state) => {
        return state.product.detailProduct
    })

    useEffect(() => {
        // dispatch(fetchProduct())
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {loading ?
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator color='red' size='large' />
                </View>
                :
                <>
                    <View style={{ flex: 1, padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Product Detail</Text>
                        <View style={{ padding: 10, borderWidth: 1, borderColor: 'black' }}>
                            <Text>Product : {detailProduct.name}</Text>
                            <Text>Price : {detailProduct.price}</Text>
                            <Text>Stock : {detailProduct.stock}</Text>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>Supplier Detail</Text>
                        <View style={{ padding: 10, borderWidth: 1, borderColor: 'black', marginBottom: 10 }}>
                            <Text>Name : {detailProduct.supplier.full_name}</Text>
                            <Text>email : {detailProduct.supplier.email}</Text>
                            <Text>phone : {detailProduct.supplier.phone_number}</Text>
                        </View>
                        <Button title='without dispatch' onPress={() => navigation.navigate('Product')} />
                        <View style={{ marginTop: 10 }}></View>
                        <Button title='with dispatch' color='orange' onPress={() => dispatch(fetchProduct())} />
                    </View>
                </>
            }
        </View>
    )
}

export default DetailScreen