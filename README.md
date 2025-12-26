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
