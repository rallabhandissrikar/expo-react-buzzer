import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";

export default class BuzzButton extends Component {
  playsound = async () => {
    await Audio.Sound.createAsync(
      { uri: require("../Buzz.mp3") },
      { shouldPlay: true }
    );

    setTimeout(() => {
      alert("you buzzed");
    }, 2000);
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            this.playsound();
          }}
        >
          <Text
            style={styles.buttonText}
          >
            Buzz
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "red",
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText : {
    fontSize: 40,
    fontFamily: "sans-serif",
  }
});
