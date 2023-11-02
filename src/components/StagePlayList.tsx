import { View, Text, FlatList, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface StagePlayCardProps {
    title: string,
    coverImg: any,
}

const StagePlayCard = ({title, coverImg}: StagePlayCardProps) => {
  return (
    <View className='w-full'>
        <Image className='w-48 h-52' source={coverImg}/>
        <Text className=''>{title}</Text>
    </View>
  )
}

export default StagePlayCard