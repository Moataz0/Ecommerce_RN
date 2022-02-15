import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Header, SliderImageBox } from '../component';

const Home = () => {

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f6fa" }}>
      <Header title="HOME" />
      {/* Slider Component */}
      <SliderImageBox />
    </View>
  )
}

export default Home

