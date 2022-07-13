import { TextInput, View, } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}
