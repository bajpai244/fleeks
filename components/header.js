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

export default ({ state, changeState, data }) => (
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
          <Name
            first_name={data.fullname.first_name}
            last_name={data.fullname.last_name}
          />
          <Follow />
          <StatsContainer
            no_of_posts={data.no_of_posts}
            no_of_followers={data.no_of_followers}
            no_of_following={data.no_of_following}
          />
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

const Name = ({ first_name = 'N/A', last_name = 'N/A' }) => (
  <>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
      {first_name}
    </Text>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
      {last_name}
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

const StatsContainer = ({
  no_of_posts = 25,
  no_of_followers = 859,
  no_of_following = 675,
}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 20,
      //      backgroundColor: 'black',
      alignSelf: 'stretch',
      paddingHorizontal: 40,
    }}>
    <Stats number={no_of_posts} label={'Posts'} />
    <Stats number={no_of_followers} label={'Followers'} />
    <Stats number={no_of_following} label={'Following'} />
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
