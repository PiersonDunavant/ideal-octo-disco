import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import EightBallModal from "../components/EightBallModal";

const magicResponses = [
  "It is certain.","It is decidedly so.","Without a doubt.","Yes — definitely.",
  "You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.",
  "Signs point to yes.","Reply hazy, try again.","Ask again later.",
  "Better not tell you now.","Cannot predict now.","Concentrate and ask again.",
  "Don't count on it.","My reply is no.","My sources say no.",
  "Outlook not so good.","Very doubtful."
];

export default function HomeScreen() {
  const [questionText, setQuestionText] = useState("");
  const [savedQuestion, setSavedQuestion] = useState("");
  const [savedResponse, setSavedResponse] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = () => {
    if (questionText.trim() === "") {
      Alert.alert("Missing Question", "Please enter a question.");
      return;
    }
    setSavedQuestion(questionText);
    setSavedResponse(magicResponses[Math.floor(Math.random() * magicResponses.length)]);
    setIsModalVisible(true);
    setQuestionText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magic Eight Ball</Text>

      <TextInput
        style={styles.input}
        placeholder="Ask your question..."
        value={questionText}
        onChangeText={setQuestionText}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ask the Eight Ball</Text>
      </TouchableOpacity>

      <EightBallModal
        isVisible={isModalVisible}
        question={savedQuestion}
        response={savedResponse}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#0b1020" },
  title: { fontSize: 28, color: "white", textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "white", padding: 12, borderRadius: 8 },
  button: { marginTop: 16, backgroundColor: "#6366f1", padding: 14, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold" }
});
