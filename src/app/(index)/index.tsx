import { ListRenderItem, FlatList, TouchableOpacity, View, ScrollView, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { stagePlays } from '../../data/stagePlays'

interface StagePlay{
  title: string,
  coverImg: any,
}

const renderItem: ListRenderItem<StagePlay> = ({item, index}) => (
    <Link href={`/${item.title}`} asChild>
      <TouchableOpacity className='w-1/2 rounded mb-4'>
          <Image className='w-full h-40 rounded-lg' source={item.coverImg}/>
          <Text className='font-semibold'>{item.title}</Text>
      </TouchableOpacity>
    </Link>
)

const Page = () => {
  return (
      <View className='flex-1'>
        <FlatList
          data={stagePlays}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          className='w-full pt-2 p-2'
          columnWrapperStyle={{  gap: 4}}
        />
        <Link href={'/addPlay'} asChild>
          <TouchableOpacity className='absolute bottom-4 right-4 bg-green-500 rounded-full p-2'>
            <FontAwesome5 name='plus' size={20}/>
          </TouchableOpacity>
        </Link>
      </View>
  )
}

export default Page