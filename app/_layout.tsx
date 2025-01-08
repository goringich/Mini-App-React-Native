import { Slot, useRouter } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "../store";
import { useEffect } from "react";

const Layout = () => {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Slot />
      </AuthWrapper>
    </Provider>
  );
};

const AuthWrapper: React.FC = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.replace("/home");
    } else {
      router.replace("/auth/login");
    }
  }, [auth.isAuthenticated]);

  return <>{children}</>;
};

export default Layout;
