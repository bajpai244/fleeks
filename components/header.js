import React from 'react'
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import theme from '../utils/theme'
import Button from './button'

const profile = require('../assets/pic1.jpg')
const menu = require('../assets/menu.png')
const menu1 = require('../assets/menu1.png')

export default ({ state, changeState }) => (
  <View
    style={{
      flex: 1,
      minHeight: '25%',
      backgroundColor: 'red',
      color: 'white',
      width: '100%',
    }}>
    <ImageBackground
      source={profile}
      style={{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      }}>
      <View style={{ width: '100%', height: '100%' }}>
        <Menu />
        <Container>
          <Name />
          <Follow />
          <StatsContainer />
          <Nav state={state} changeState={changeState} />
        </Container>
      </View>
    </ImageBackground>
  </View>
)

const Menu = () => (
  <View style={{ alignItems: 'flex-end', paddingTop: 15 }}>
    <Image style={{ height: 25, width: 25 }} source={menu} />
  </View>
)

const Container = ({ children }) => (
  <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
    {children}
  </View>
)

const Name = () => (
  <>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
      Bully
    </Text>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
      Lamjarred
    </Text>
  </>
)

const Follow = () => (
  <View
    style={{
      flexDirection: 'row',
      //justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Button style={{ paddingTop: 10 }} title='Follow' />
    {/*  <View style={{}}>
              <Image style={{ width: 40, height: 40 }} source={menu1} />
        </View>*/}
  </View>
)

const StatsContainer = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 20,
      //      backgroundColor: 'black',
      alignSelf: 'stretch',
      paddingHorizontal: 40,
    }}>
    <Stats number={'25'} label={'Posts'} />
    <Stats number={'859'} label={'Followers'} />
    <Stats number={'675'} label={'Following'} />
  </View>
)

const Stats = ({ number, label }) => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
      {number}
    </Text>
    <Text style={{ color: theme.color.label }}>{label}</Text>
  </View>
)

const Nav = ({ state, changeState }) => (
  <View
    style={{
      flexDirection: 'row',
      paddingTop: 15,
      paddingBottom: 0,
      alignSelf: 'stretch',
    }}>
    <NavComp
      changeState={changeState}
      text='Posts'
      state={0}
      style={{}}
      bold={state == 0}
    />
    <NavComp
      changeState={changeState}
      text='Skills'
      state={1}
      style={{}}
      bold={state == 1}
    />
    <NavComp
      changeState={changeState}
      text='Experience'
      state={2}
      style={{}}
      bold={state == 2}
    />
  </View>
)

const NavComp = ({ changeState, state, text, bold = false, style }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      borderBottomWidth: bold ? 1 : 0,
      paddingBottom: 8,
      borderColor: theme.color.primary,
    }}
    onPress={() => {
      changeState(state)
    }}>
    <Text
      style={{
        color: bold ? 'white' : theme.color.label,
        fontSize: 16,
        fontWeight: bold ? 'bold' : 'normal',
        ...style,
      }}>
      {text}
    </Text>
  </TouchableOpacity>
)
