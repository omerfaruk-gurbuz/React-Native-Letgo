import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import MessageNotification from "../../components/MessageNotification"
import CategoryFilter from "../../components/CategoryFilter"
import FavoriteProducts from "../../components/FavoriteProducts"
import MainProducts from "../../components/MainProducts"
import { Product } from "../../models/index"
import productassets from "../../../assets/products"

function index({}) {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productassets)
    }, [])

  return (
    <ScrollView style={{backgroundColor:"white",height:"100%"}}>
        <MessageNotification/>
        <CategoryFilter/>
        <FavoriteProducts/>
        <MainProducts filtered={true} mainProducts={products} header={"Pendik"}/>
    </ScrollView>
  )
}

export default index