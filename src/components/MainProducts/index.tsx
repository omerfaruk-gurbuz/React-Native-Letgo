import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import { Foundation } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import FavoriteProductItem from "../../components/FavoriteProductItem"

type mainProductsProps = {
  mainProducts : Product[]
  header : string
  filtered : Boolean
}

function index({ mainProducts,header,filtered }: mainProductsProps) {
  return (
      <View style={styles.productsContainer}>
        <View style={styles.titleProducts}>
          <Text style={styles.topicTitle}>{header}</Text>
          {filtered && <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={styles.detailTitle}>Düzelt</Text>
            <Entypo name="chevron-right" size={24} color="#F24E61" />
          </View>}
        </View>
        <View style={styles.listContainer}>
          {mainProducts.map((item)=>(
            <FavoriteProductItem prodType="main" key={index} product={item}/>
          ))}
        </View>
      </View>
  );
}

export default index;
