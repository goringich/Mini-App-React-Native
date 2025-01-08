import { View, Text } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: "white" }}>Home Screen</Text>
    </View>
  );
}
