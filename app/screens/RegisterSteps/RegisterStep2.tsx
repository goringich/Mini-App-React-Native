import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterStep2 = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creating Account</Text>
      <Text style={styles.stepText}>2/13</Text>

      <Text style={styles.label}>What's your name?</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        placeholderTextColor="#777"
        value={surname}
        onChangeText={setSurname}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  stepText: {
    color: "#FFA500",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  label: { color: "#fff", fontSize: 18, marginBottom: 8 },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: { backgroundColor: "#FFA500", padding: 12, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default RegisterStep2;
