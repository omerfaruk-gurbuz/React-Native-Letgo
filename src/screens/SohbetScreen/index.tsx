import React,{useEffect,useState} from 'react'
import {View,FlatList,Text, ActivityIndicator} from "react-native"
import MessageItem from "../../components/MessageItem"
import messageData from "../../../assets/messages"
// import { DataStore } from 'aws-amplify'
import { Message } from '../../models'
function index() {
  const [messages,setMessages] = useState<Message[]>([])

  // useEffect(() => {
  //   DataStore.query(Message).then(setMessages)
  // })
  // if(!messages)
  //   return <ActivityIndicator />
  return (
    <View>
        <FlatList
            data={messageData}
            renderItem={({item}) => <MessageItem item={item} />}
        />
    </View>
  )
}

export default index