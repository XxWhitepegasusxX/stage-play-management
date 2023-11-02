import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface CustomHeaderProps{
    title: string;
    isSecondary?: boolean;
}

const CustomHeader = ({title, isSecondary}: CustomHeaderProps) => {
  const navigation = useNavigation()
  return (
    <View>
        <View className="bg-green-500 h-24 pb-2 justify-end items-center">
            { isSecondary && (
              <TouchableOpacity onPress={() => navigation.goBack()} className='absolute left-4 bottom-2'>
                <Ionicons name='chevron-back-outline' size={25}/>
              </TouchableOpacity>
            )}
            <Text className='text-xl font-semibold'>{title}</Text>
        </View>
    </View>
  )
}

export default CustomHeader