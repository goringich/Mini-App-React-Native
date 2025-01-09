import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterStep1 = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creating Account</Text>
      <Text style={styles.stepText}>1/13</Text>

      <Text style={styles.label}>Create account</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink}>Login here</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.disabledButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStep2")}
        >
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
  loginText: { color: "#aaa", textAlign: "center", marginVertical: 10 },
  loginLink: { color: "#FFA500" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: { backgroundColor: "#FFA500", padding: 12, borderRadius: 8 },
  disabledButton: { backgroundColor: "#333", padding: 12, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default RegisterStep1;
