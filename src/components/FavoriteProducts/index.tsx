import React, { useEffect, useState } from 'react'
import styles from "./style"
import { FlatList, ScrollView, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import productassets from "../../../assets/products"
import {Product } from "../../models/index"
import FavoriteProductItem from "../../components/FavoriteProductItem"

type FavoriteProductsType={
    productArray:Product[]
}

function index({}) {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productassets)
    }, [])
    
  return (
    <View style={styles.productsContainer}>
        <View style={styles.titleProducts}>
            <Text style={styles.topicTitle}>Vitrin İlanları</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={styles.detailTitle}>Hepsini Gör</Text>
                <Entypo name="chevron-right" size={24} color="#F24E61" />
            </View>
        </View>

        <ScrollView
            bounces={true}
            horizontal={true}
        >
            {products.map((item)=>(
                <FavoriteProductItem prodType="favorite" key={index} product={item}/>
            ))}
        </ScrollView>
    </View>
  )
}

export default index