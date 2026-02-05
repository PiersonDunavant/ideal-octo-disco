import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function EightBallModal({ isVisible, question, response, onClose }) {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Your Result</Text>

          <Text style={styles.label}>Question:</Text>
          <Text>{question}</Text>

          <Text style={styles.label}>Eight Ball Says:</Text>
          <Text style={styles.response}>{response}</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", padding: 20 },
  card: { backgroundColor: "white", borderRadius: 12, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  label: { marginTop: 10, fontWeight: "bold" },
  response: { marginTop: 5, fontSize: 16, color: "#4338ca" },
  button: { marginTop: 16, backgroundColor: "#0f172a", padding: 12, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold" }
});
