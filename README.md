# Urbanway Frontend Test

คำอธิบาย

โปรเจคตัวอย่างหน้า frontend ที่สร้างด้วย React + TypeScript + Vite สำหรับทดสอบฟีเจอร์ UI พื้นฐาน

**Prerequisites (สิ่งที่ต้องติดตั้ง)**
- Node.js (แนะนำ >= 18)
- npm / yarn / pnpm

**ติดตั้ง**
1. โคลน repo นี้ 

```bash
git clone "https://github.com/arcarnupab8/Urbanway_frontend-test.git"
cd Urbanway_frontend-test
```

2. ติดตั้ง dependencies

```bash
npm install
# หรือใช้ yarn
# yarn
```

**สคริปต์ที่ใช้ได้**
- `npm run dev` — รันโหมดพัฒนา (Vite)
- `npm run build` — คอมไพล์ TypeScript และสร้างบิลด์ (tsc + vite build)
- `npm run preview` — ดูบิลด์ที่สร้างด้วย Vite preview
- `npm run lint` — รัน ESLint

ตัวอย่างคำสั่งรัน

```bash
npm run dev
# เปิดเบราว์เซอร์ที่ http://localhost:5173
```

**โครงสร้างโปรเจค (สำคัญ)**
- `src/` — โค้ดหลักของโปรเจค
  - `components/` — คอมโพเนนต์หลัก เช่น `Navbar.tsx`, `Sidebar.tsx`, `AddDialog.tsx`, `DetailDialog.tsx`, `Withdrawaltable.tsx`
  - `pages/` — หน้าต่าง ๆ เช่น `Home.tsx`, `History.tsx`
  - `data/` — ตัวอย่างข้อมูล (`SampleData.tsx`, `SampleType.tsx`)

**ฟีเจอร์ที่มี (ที่สังเกตได้จากโค้ด)**
- เมนูนำทางด้านบน (`Navbar`)
- แถบเมนูด้านข้าง (`Sidebar`)
- Dialog สำหรับเพิ่มข้อมูลรายการเบิกถอนเงิน (`AddDialog`)
- Dialog สำหรับดูรายละเอียดรายการเบิกถอนเงิน (`DetailDialog`)
- ตารางแสดงรายการเบิกถอนเงิน (`Withdrawaltable`)
- หน้า Home และ History สำหรับแสดงข้อมูลตัวอย่าง

**ข้อแนะนำเพิ่มเติม**
- ถ้าต้องการตรวจสอบ TypeScript หรือ ESLint เพิ่มเติม ให้รันคำสั่งที่เกี่ยวข้องใน `package.json` ตามที่ระบุไว้ด้านบน
- หากต้องการเปลี่ยนพอร์ตของ Vite ให้แก้ไฟล์ `vite.config.ts` หรือใช้ environment variable

**ติดต่อ / Contribute**
- เปิด issue หรือ pull request เพื่อเสนอปรับปรุงได้เลย
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
