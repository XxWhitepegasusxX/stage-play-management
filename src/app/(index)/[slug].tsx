import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import CustomHeader from '@/src/components/CustomHeader'

const Page = () => {
  const { slug } = useLocalSearchParams<{slug: string}>()

  return (
    <View>
      <CustomHeader isSecondary title={slug}/>
      <Text>Slug: {slug}</Text>
    </View>
  )
}

export default Page