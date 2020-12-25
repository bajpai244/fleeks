import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Platform,
  Text,
} from 'react-native'
import Constants from 'expo-constants'
import Header from './components/header'
import Footer from './components/footer'
import Gallery from './components/gallery'
import Skills from './components/skills'
import Experience from './components/experience'

export default function App() {
  const [state, changeState] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fleeksapi.vercel.app/api/query', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_id: 'something@something.com',
        password: 'sjdlsaaslkd',
      }),
    })
      .then((response) => response.json())
      .then((json) => setData(json[0]))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return isLoading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color='#00ff00' />
      <Text>Loading</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
        <Header data={data} state={state} changeState={changeState} />
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
          {state == 0 ? (
            <Gallery data={data} />
          ) : state == 1 ? (
            <Skills data={data} />
          ) : (
            <Experience data={data} />
          )}
        </ScrollView>
      </View>
      <Footer />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    //paddingTop: Platform.OS == 'ios' ? Constants.statusBarHeight : null,
    //justifyContent: 'center',
  },
})
