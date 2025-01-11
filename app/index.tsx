import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { View, ActivityIndicator } from "react-native";

const Index = () => {
  const router = useRouter();
  const auth = useSelector((state: RootState) => state.auth);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    if (auth.isAuthenticated) {
      router.replace("/home");
    } else {
      router.replace("/screens/login");
    }
  }, [auth.isAuthenticated, isReady]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#FFA500" />
    </View>
  );
};

export default Index;
