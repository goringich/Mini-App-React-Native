import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import InputField from "@components/InputField";

const RegisterStep1 = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creating Account</Text>
      <Text style={styles.stepText}>1/13</Text>

      <Text style={styles.label}>Create account</Text>

      <InputField
        placeholder="E-mail"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
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
          onPress={() => router.push("/screens/RegisterStep2")}
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
