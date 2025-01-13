

# 🏋️‍♂️ FitnessApp

**FitnessApp** — это мобильное приложение для фитнес-трекинга, разработанное на **React Native (Expo) + TypeScript**. Оно поддерживает **Redux** для управления состоянием и **Stack Navigator** для удобной навигации.



https://github.com/user-attachments/assets/0b878eb3-aa6a-4503-b1ec-26ed870b9f9b



---

## 🚀 Используемые технологии

- **React Native + Expo** — для создания и запуска приложения
- **TypeScript** — для статической типизации и повышения качества кода
- **Redux Toolkit** — для управления состоянием
- **React Navigation (Stack Navigator)** — для навигации между экранами
- **SCSS** — для стилизации (вынесено отдельно от кода)
- **Metro Bundler** — вместо Webpack для сборки проекта

---

## 📂 Структура проекта

```
📦 FitnessApp
 ┣ 📂 app
 ┃ ┣ 📂 auth
 ┃ ┃ ┣ 📂 components
 ┃ ┣ 📂 home
 ┃ ┃ ┣ 📂 navigation
 ┃ ┣ 📂 screens
 ┃ ┃ ┣ 📂 RegisterSteps
 ┃ ┃ ┣ 📂 WelcomeScreen
 ┣ 📂 assets
 ┣ 📂 components
 ┃ ┣ 📂 __tests__
 ┣ 📂 constants
 ┣ 📂 hooks
 ┣ 📂 node_modules
 ┣ 📂 scripts
 ┣ 📂 store
 ┣ 📜 app.json
 ┣ 📜 babel.config.js
 ┣ 📜 declarations.d.ts

```

---

## 🛠 Установка и запуск

### 1️⃣ Клонируйте репозиторий
```bash
git clone https://github.com/goringich/Mini-App-React-Native.git
cd Mini-App-React-Native
```

### 2️⃣ Установите зависимости
```bash
yarn install
```

### 3️⃣ Запустите приложение
```bash
yarn expo start
```

