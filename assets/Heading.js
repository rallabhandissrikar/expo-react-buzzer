import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";
import {
    useFonts,
    Inter_900Black,
    Roboto,
    Poppins
  } from '@expo-google-fonts/inter';

export default class HeadingText extends Component {
  render() {
    return (
      <View style = {styles.viewstyle}>
          <Text style={styles.text1}>The Buzzer App</Text>
          <Text style={styles.text1}>Contest:"      "</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text1:{
        fontSize:50,
        fontFamily:Poppins
    },
    viewstyle:{
        marginBottom:50
    }
})