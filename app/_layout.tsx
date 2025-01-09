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

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (__DEV__) {
      // В режиме разработки разрешаем регистрацию без редиректа
      const publicRoutes = [
        "/auth/login",
        "/auth/register-step1",
        "/auth/register-step2",
        "/auth/register-step3",
        "/auth/register-success"
      ];

      if (auth.isAuthenticated) {
        router.replace("/home");
      } else if (!publicRoutes.includes(router.pathname)) {
        router.replace("/screens/login");
      }
    } else {
      // В продакшене - строгая логика
      if (auth.isAuthenticated) {
        router.replace("/home");
      } else {
        router.replace("/screens/login");
      }
    }
  }, [auth.isAuthenticated, router.pathname]);

  return <>{children}</>;
};

export default Layout;
