# MY PROPERTY — Website Portal

ไฟล์ต้นฉบับหน้าเว็บทางเข้าสู่ MY PROPERTY โทนขาว–เขียวที่เผยแพร่ใน ChatGPT Sites (เวอร์ชัน 1) โดยคง HTML, CSS และภาพ SVG เดิมทั้งหมด

## เปิดดู
แตกไฟล์ ZIP แล้วเปิด `index.html` ในเบราว์เซอร์ ให้ไฟล์ `mark.svg` และ `workspace.svg` อยู่ในโฟลเดอร์เดียวกัน

## โครงสร้าง
- `index.html` — หน้าเว็บและ CSS
- `mark.svg` — ตราสัญลักษณ์
- `workspace.svg` — ภาพประกอบ
- `.nojekyll` — สำหรับการทดสอบเผยแพร่หน้า HTML คงที่ผ่าน GitHub Pages

## แนวทางสำหรับใช้งานธุรกิจจริง (แนะนำ)
1. สร้าง GitHub repository ชื่อ `my-property` แบบ Private แล้วอัปโหลดไฟล์ทั้งหมดจากโฟลเดอร์นี้
2. เชื่อม repository กับ Cloudflare Pages (Workers & Pages → Create application → Pages → Connect to Git)
3. เลือก branch `main`, ไม่ต้องใช้ framework หรือ build command, เลือก output directory เป็น root (`.`) ของ repository ที่มี index.html
4. Deploy แล้วเปิด URL `*.pages.dev` ที่ระบบออกให้ หรือใช้ Direct Upload กับไฟล์หน้าเว็บที่แตก ZIP แล้ว

## หากใช้ GitHub Pages สำหรับหน้าแสดงตัวอย่างที่อยู่ในขอบเขตข้อกำหนด
1. GitHub Free ต้องใช้ public repository เพื่อเปิด Pages
2. Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save
3. ตัวอย่าง URL: https://pung3046-byte.github.io/my-property/ (เป็นตัวอย่าง ไม่ใช่ลิงก์ที่เผยแพร่สำเร็จแล้ว)
4. GitHub Pages ไม่เหมาะกับการโฮสต์ระบบเพื่อดำเนินธุรกิจออนไลน์หรืออำนวยความสะดวกธุรกรรมเชิงพาณิชย์ อ่านข้อกำหนด: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## ความปลอดภัย
- ชุดไฟล์นี้เป็นเพียงหน้าเว็บทางเข้า ไม่มีฐานข้อมูล เอกสารเคส หรือ API key และไม่มีโค้ดหลังบ้าน Google Apps Script
- หน้าเว็บภายนอกอาจเปิดดูได้สาธารณะและ URL Apps Script ใน HTML สามารถมองเห็นได้ ไม่ควรใช้ URL เป็นกลไกยืนยันตัวตน
- ปุ่มเข้าสู่ระบบเปิด Apps Script เดิมในแท็บใหม่ โดยต้องคงการตรวจบัญชี Google/สิทธิ์ผู้ใช้งานในระบบหลังบ้าน
- ไม่ต้องย้าย Sheet, Drive, Bot หรือข้อมูลทรัพย์ และไม่ต้องแก้โค้ดตลาดเดิมบน Apps Script
- เมื่อเปลี่ยน deployment URL ให้แก้ href ของลิงก์ id="enter-system" ใน index.html

## อัปเดต Home V2: Google login + Add Mail (27 พ.ย. 2569)
- **เข้าสู่ระบบด้วย Google**: ลิงก์ไปยัง Web App เดิม (ลงชื่อเข้าใช้ Google ก่อนหากยังไม่มี session)
- **จัดการอีเมลสมาชิก**: ลิงก์ไปยัง Web App เดิมด้วย `?view=members` ซึ่งเจ้าของเท่านั้นเปิดได้ มีฟอร์มเพิ่ม/ถอนสิทธิ์ใน WEB_ALLOWED_EMAILS และตรวจผลบันทึกทางเซิร์ฟเวอร์
- ระบบ Google Apps Script v1.5.7 Deployment 37 มีหน้าจัดการสมาชิกแล้ว และคง URL กับการตั้งค่าเดิม
- หน้าเว็บนี้ไม่ใช่ระบบ OAuth แยก ไม่เก็บรหัสผ่าน และไม่มีรายชื่อสมาชิกใน HTML
- **ข้อจำกัดสำคัญ**: Deployment เดิมทำงานในนามเจ้าของเพื่อรองรับ Bot; Google อาจไม่คืนอีเมลผู้ใช้คนอื่นให้ Apps Script ในบริบทนี้ การเพิ่มอีเมลใน allowlist จึงไม่รับประกันว่าบัญชีภายนอกจะเข้าได้จนกว่าจะทดสอบจริงและจัดสิทธิ์/ยืนยันตัวตนเพิ่มเติม ห้ามเปลี่ยนเป็น execute as user หรือแชร์ฐานข้อมูลโดยพลการ เพราะอาจกระทบ Bot/Drive/Sheets
- ทดสอบด้วยบัญชีเจ้าของจริงใน Dev: เปิดหน้าสมาชิก, โหลดรายชื่อ, เพิ่มอีเมลเจ้าของซ้ำโดยไม่เปลี่ยนสิทธิ์, เปิดแดชบอร์ดเดิม; ทดสอบสิทธิ์ 10 กรณีด้วยข้อมูลจำลอง ยังไม่ได้เพิ่มอีเมลบุคคลอื่นจริง
