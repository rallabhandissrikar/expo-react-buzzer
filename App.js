import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";
import BuzzButton from "./assets/SoundButton"
import HeadingText from "./assets/Heading"

export default class App extends Component {
  render() {
    return(
      <View style = {styles.AppView}>
        <HeadingText/>
        <BuzzButton/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  AppView : {
    justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height:'100%'
  }
})