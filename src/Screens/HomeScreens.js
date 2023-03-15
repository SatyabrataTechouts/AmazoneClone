import {View, Text,StatusBar,Image,Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import catagories from '../../JSON/Cetagories.json'
const HomeScreens = () => {
  console.log('catagories', catagories)
  const renderItem=({item})=>{
   return (
    <View style={{padding:12}}>
        <Pressable style={{alignItems:'center'}} onPress={{}}>
         <Image source={{uri:item.image}} style={{height:50,width:50}}/>
         <Text>{item.name}</Text>
         </Pressable>
    </View>
   )
  }
  return (
    <SafeAreaView>
     <StatusBar
     backgroundColor={"#20CFC9"}
     />
      <View
        style={{
          height: 55,
          backgroundColor: '#20CFC9',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation:2
        }}>
        <View
          style={{
            padding: 6,
            width: 300,
            height: 40,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            borderRadius: 6,
            alignItems: 'center',
            marginLeft: 6,
          }}>
          <View style={{marginLeft: 5}}>
            <FontAwesome name="search" color="black" size={16} />
          </View>
          <TextInput
            placeholder="Search Amazon.in"
            placeholderTextColor={'black'}
            style={{
              width: 280,
              height: 40,
              marginLeft: 12,
            }}
          />
        </View>
        <View style={{marginRight: 25}}>
          <Foundation name="microphone" size={27} />
        </View>
      </View>
      <ScrollView>
            <View style={{backgroundColor:'#A2EDE9',height:40,elevation:1}}><Text></Text></View>
             <View style={{backgroundColor:'#FFFFFF'}}>
                <FlatList
                horizontal
                  data={catagories}
                  renderItem={renderItem}
                 />
             </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;
