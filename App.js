import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Platform } from 'react-native'
import Constants from 'expo-constants'
import Header from './components/header'
import Footer from './components/footer'
import Gallery from './components/gallery'
import Skills from './components/skills'
import Experience from './components/experience'

export default function App() {
  const [state, changeState] = useState(0)
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
        <Header state={state} changeState={changeState} />
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
          {state == 0 ? <Gallery /> : state == 1 ? <Skills /> : <Experience />}
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
