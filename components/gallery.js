import React from 'react'
import { View, ImageBackground } from 'react-native'

const img1 = require('../assets/img1.jpg')
const img2 = require('../assets/img2.jpg')
const img3 = require('../assets/image3.jpg')
const img4 = require('../assets/image4.jpg')

const arr = [img1, img2, img3, img4]
const arr1 = [img2, img3, img4, img1]

export default () => (
  <View style={{ flexDirection: 'row' }}>
    <Column data={arr} keyval={'c1'} style={{ paddingRight: 2.5 }} />
    <Column data={arr1} keyval={'c2'} style={{ paddingLeft: 2.5 }}></Column>
  </View>
)

const Column = ({ children, style = {}, data = undefined, keyval = 'c3' }) => (
  <View style={{ flex: 1, marginVertical: 5, ...style }}>
    {children}
    {data
      ? data.map((src, index) => <Img src={src} key={keyval + index} />)
      : null}
  </View>
)

const Img = ({ src }) => (
  <ImageBackground
    style={{ width: '100%', height: 150, marginTop: 5 }}
    source={src}
  />
)
