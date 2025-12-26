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

  **เครื่องมือที่ใช้พัฒนา**
  - `React`: ไลบรารีสำหรับสร้าง UI
  - `TypeScript`: ภาษา JavaScript ที่เพิ่ม static types
  - `Vite`: บันเดิลและ dev server ความเร็วสูง
  - `Material UI (MUI)`: ไลบรารีคอมโพเนนต์ UI ที่ใช้สำหรับปุ่ม, Dialogs และเลย์เอาต์ (ใช้เพื่อความสวยงามและความสอดคล้องของ UI)
  - `ESLint`: ตรวจสอบคุณภาพโค้ดและโครงสร้าง
  - `Node.js` / `npm`: runtime และตัวจัดการแพ็กเกจ

  **ฟีเจอร์ที่มี (ที่สังเกตได้จากโค้ด)**
- เมนูนำทางด้านบน (`Navbar`)
- แถบเมนูด้านข้าง (`Sidebar`)
- Dialog สำหรับเพิ่มข้อมูลรายการเบิกถอนเงิน (`AddDialog`)
- Dialog สำหรับดูรายละเอียดรายการเบิกถอนเงิน (`DetailDialog`)
- ตารางแสดงรายการเบิกถอนเงิน (`Withdrawaltable`)
- หน้า Home และ History สำหรับแสดงข้อมูลตัวอย่าง

  **การใช้งานเว็บเบื้องต้น**

  - เปิดเบราว์เซอร์ที่ `http://localhost:5173`
  - การนำทาง:
    - ใช้เมนูด้านบน (`Navbar`) เพื่อเปิดแถบด้านข้าง (`Sidebar`) และแถบด้านข้าง (`Sidebar`) เพื่อสลับระหว่างหน้า `Home` และ `History`.
  - ดูข้อมูลและจัดการรายการ:
    - หน้า `Home` จะแสดงตารางรายการ (`Withdrawaltable`).
    - คลิกปุ่ม "เพิ่ม" ในหน้า `History` เพื่อเปิด `AddDialog` และกรอกข้อมูลรายการใหม่ จากนั้นกดบันทึกเพื่อเพิ่มรายการ.
    - คลิกแถวรายการถอนเงินเพื่อเปิด `DetailDialog` ดูรายละเอียดรายการถอนเงินนั้น.
  - ปิด Dialog โดยกดปุ่มปิดหรือคลิกพื้นที่นอก Dialog.

**ข้อแนะนำเพิ่มเติม**
- ถ้าต้องการตรวจสอบ TypeScript หรือ ESLint เพิ่มเติม ให้รันคำสั่งที่เกี่ยวข้องใน `package.json` ตามที่ระบุไว้ด้านบน
- หากต้องการเปลี่ยนพอร์ตของ Vite ให้แก้ไฟล์ `vite.config.ts` หรือใช้ environment variable

**ติดต่อ / Contribute**
- เปิด issue หรือ pull request เพื่อเสนอปรับปรุงได้เลย
