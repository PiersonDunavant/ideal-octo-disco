import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ReserveButton({ onPress }) {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>
        Reserve Now
      </Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({

  button: {
    backgroundColor: "#2e8b57",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center"
  },

  text: {
    color: "white",
    fontSize: 18
  }

});