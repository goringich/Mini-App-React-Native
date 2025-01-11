/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/entry`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/AuthForm`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/Footer`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/FormTitle`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/InputField`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/LoginButton`; params?: Router.UnknownInputParams; } | { pathname: `/auth/components/Overlay`; params?: Router.UnknownInputParams; } | { pathname: `/home`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/AuthStack`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/MainStack`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/RootNavigator`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/WorkoutStack`; params?: Router.UnknownInputParams; } | { pathname: `/screens/login`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RegisterStep1`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RegisterStep2`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/WelcomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/ImageWrapper`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/Title`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/SwipeIndicator/SwipeButton`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/SwipeIndicator/SwipeIndicator`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/entry`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/AuthForm/AuthForm`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/AuthForm/components/Footer`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/AuthForm/components/FormTitle`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/AuthForm/components/InputField`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/AuthForm/components/LoginButton`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/components/Overlay`; params?: Router.UnknownOutputParams; } | { pathname: `/home`; params?: Router.UnknownOutputParams; } | { pathname: `/navigation/AuthStack`; params?: Router.UnknownOutputParams; } | { pathname: `/navigation/MainStack`; params?: Router.UnknownOutputParams; } | { pathname: `/navigation/RootNavigator`; params?: Router.UnknownOutputParams; } | { pathname: `/navigation/WorkoutStack`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/login`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/RegisterStep1`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/RegisterStep2`; params?: Router.UnknownOutputParams; } | { pathname: `/WelcomeScreen/WelcomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/WelcomeScreen/components/ImageWrapper`; params?: Router.UnknownOutputParams; } | { pathname: `/WelcomeScreen/components/Title`; params?: Router.UnknownOutputParams; } | { pathname: `/WelcomeScreen/components/SwipeIndicator/SwipeButton`; params?: Router.UnknownOutputParams; } | { pathname: `/WelcomeScreen/components/SwipeIndicator/SwipeIndicator`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/entry${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/auth/AuthForm/AuthForm${`?${string}` | `#${string}` | ''}` | `/auth/AuthForm/components/Footer${`?${string}` | `#${string}` | ''}` | `/auth/AuthForm/components/FormTitle${`?${string}` | `#${string}` | ''}` | `/auth/AuthForm/components/InputField${`?${string}` | `#${string}` | ''}` | `/auth/AuthForm/components/LoginButton${`?${string}` | `#${string}` | ''}` | `/auth/components/Overlay${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `/navigation/AuthStack${`?${string}` | `#${string}` | ''}` | `/navigation/MainStack${`?${string}` | `#${string}` | ''}` | `/navigation/RootNavigator${`?${string}` | `#${string}` | ''}` | `/navigation/WorkoutStack${`?${string}` | `#${string}` | ''}` | `/screens/login${`?${string}` | `#${string}` | ''}` | `/screens/RegisterStep1${`?${string}` | `#${string}` | ''}` | `/screens/RegisterStep2${`?${string}` | `#${string}` | ''}` | `/WelcomeScreen/WelcomeScreen${`?${string}` | `#${string}` | ''}` | `/WelcomeScreen/components/ImageWrapper${`?${string}` | `#${string}` | ''}` | `/WelcomeScreen/components/Title${`?${string}` | `#${string}` | ''}` | `/WelcomeScreen/components/SwipeIndicator/SwipeButton${`?${string}` | `#${string}` | ''}` | `/WelcomeScreen/components/SwipeIndicator/SwipeIndicator${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/entry`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/AuthForm`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/Footer`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/FormTitle`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/InputField`; params?: Router.UnknownInputParams; } | { pathname: `/auth/AuthForm/components/LoginButton`; params?: Router.UnknownInputParams; } | { pathname: `/auth/components/Overlay`; params?: Router.UnknownInputParams; } | { pathname: `/home`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/AuthStack`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/MainStack`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/RootNavigator`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/WorkoutStack`; params?: Router.UnknownInputParams; } | { pathname: `/screens/login`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RegisterStep1`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RegisterStep2`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/WelcomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/ImageWrapper`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/Title`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/SwipeIndicator/SwipeButton`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen/components/SwipeIndicator/SwipeIndicator`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
