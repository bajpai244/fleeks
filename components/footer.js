import React from 'react'
import { View, Image } from 'react-native'
import theme from '../utils/theme'

const home = require('../assets/home.png')
const search = require('../assets/search.png')
const fleet = require('../assets/fleekalt.png')
const comment = require('../assets/comment.png')
const profile = require('../assets/profilepic.png')

export default () => (
  <View
    style={{
      backgroundColor: theme.color.grey,
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'center',
      zIndex: 3,
      maxHeight: 50,
      height: 50,
    }}>
    <Img src={home} style={{ marginLeft: 5 }} />
    <Img src={search} style={{ marginLeft: 5 }} />
    <Img src={fleet} style={{ width: 60, height: 60 }} fleet />
    <Img src={comment} style={{ width: 30, height: 30 }} />
    <Img src={profile} style={{ marginLeft: 'auto', marginRight: 5 }} />
  </View>
)

const Img = ({ src, style = {}, fleet = false }) => (
  <View
    style={{
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      paddingBottom: fleet ? 50 : 0,
    }}>
    <Image
      style={{
        width: 35,
        height: 35,
        ...style,
      }}
      source={src}
    />
  </View>
)
