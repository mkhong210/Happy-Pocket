# HappyPocket

<br />

## 기획 개요

**HappyPocket**은 React와 Supabase 기반의 개인 가계부 웹앱입니다.  
사용자가 여러 계좌를 등록하고, 각 계좌별로 수입과 지출을 쉽게 기록·관리할 수 있도록 개발되었습니다.  
정기 거래 관리, 월별 요약, 캘린더 및 리스트 뷰를 제공하여 체계적인 개인 재정 관리를 지원합니다.

<br />

## 기술 스택

- **Frontend** : React (Typescript), Tailwind CSS
- **데이터베이스 및 인증** : Supabase
- **라이브러리** : react-calendar
- **배포** : vercel
  <!-- - **상태 관리** : React Context API (AuthContext) -->
  <!-- - **기본 저장소** : LocalStorage (초기 버전) -->

<br/>

## 주요 기능

- 계좌별 거래 내역 관리
- 수입/지출 내역 추가
- 거래 내역 캘린더 뷰 & 리스트 뷰 제공
- 거래 내역 정기 거래(고정 지출/수입) 관리
- 전역 인증 상태 관리를 위한 AuthProvider 적용
  <!-- - 월별 수입/지출 요약 및 통계 제공 -->
  <!-- - 로그인 및 인증 기능 구현 (Login 페이지, AuthContext, Supabase 연동) -->

<br />

## 🧪 테스트 계정

Supabase에서 다음과 같은 테스트 계정을 생성하여 로그인 기능을 테스트할 수 있습니다.

```
이메일: testuser@happy.com
비밀번호: test1234
```

<!-- 기존 readme -->
<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
``` -->
