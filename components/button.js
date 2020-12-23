import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import theme from '../utils/theme'

export default function Comp({ title, onPress = () => {}, style = {} }) {
  return (
    <>
      <View style={{ width: 100, ...style }}>
        <TouchableOpacity
          onPress={() => {
            onPress()
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: theme.color.primary,
              borderRadius: 20,
            }}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}
