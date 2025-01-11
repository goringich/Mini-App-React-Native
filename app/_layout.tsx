import { Slot, useRouter, usePathname } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "../store";
import { useEffect, useRef, useState } from "react";

const Layout = () => {
  return (
    <Provider store={store}>
      {/* <AuthWrapper> */}
        <Slot />
      {/* </AuthWrapper> */}
    </Provider>
  );
};

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pathname = usePathname();
  const isRedirecting = useRef(false);
  const [isReady, setIsReady] = useState(false);

  // Добавляем небольшую задержку перед навигацией
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || isRedirecting.current) return;
    isRedirecting.current = true;

    const publicRoutes = [
      "/screens/login",
      "/screens/RegisterStep1",
      "/screens/RegisterStep2",
      "/screens/RegisterStep3",
      "/screens/register-success"
    ];

    if (auth.isAuthenticated) {
      if (pathname !== "/home") {
        router.replace("/home");
      }
    } else if (!publicRoutes.includes(pathname)) {
      router.push("/screens/login");
    }

    setTimeout(() => {
      isRedirecting.current = false;
    }, 500);
  }, [auth.isAuthenticated, pathname, isReady]);

  return <>{children}</>;
};

export default Layout;
