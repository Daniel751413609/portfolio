# PetNFC 開發對話紀錄

> 最後更新：2026-04-21 01:56（台北時間）
> 用途：讓 Claude 在未來對話中快速恢復 PetNFC 專案脈絡

---

## 專案定位
台灣首個寵物 NFC 智慧識別平台「毛孩智聯 PetNFC」。
飼主購買 NFC 吊牌 → 路人掃一下 → 手機開網頁看到寵物資料 → 同時 LINE 通知飼主。
Pitch Deck 已完成：`portfolio-site/petnfc/index.html`

---

## 技術選型（已確認）
| 用途 | 工具 |
|------|------|
| 前端 PWA | Next.js 14 App Router |
| 資料庫 | Supabase |
| 使用者登入 | LINE Login |
| 推播通知 | LINE Bot Messaging API |
| 部署 | Vercel |
| 自動化 | n8n |

---

## 已安裝的 Claude Skills
位置：`.claude/skills/`（daniel-agent 專案根目錄）

- `nextjs-developer` — 前端、PWA、頁面元件
- `supabase` — 資料庫、Auth、RLS、Storage
- `linebot-specialist` — LINE Bot、Webhook、LINE Login、推播
- `security-reviewer` — 部署前安全審查、Token 防洩漏

---

## 設計文件（已存在）
- `portfolio-site/petnfc/designer-handoff-ai.md` — 給 AI 的設計規格書（畫面、用戶、流程）
- `portfolio-site/petnfc/product-execution.md` — 產品執行拆解（角色、動作、MVP 範圍）
- `portfolio-site/petnfc/index.html` — Pitch Deck（靜態網頁）

---

## MVP 三條主線（Phase 1）
1. 飼主可用 LINE Login 登入，並建立寵物檔案
2. 路人掃 NFC 後開啟公開頁，看到寵物資料並聯絡飼主
3. 掃描發生後，系統自動推 LINE 通知給飼主

---

## 五個核心畫面
| # | 畫面名稱 | 主要用戶 | 優先度 |
|---|---------|---------|--------|
| 1 | 飼主啟用頁 | 飼主 | Phase 1 |
| 2 | 飼主編輯寵物資料頁 | 飼主 | Phase 1 |
| **3** | **NFC 掃描公開頁** | **路人／拾獲者** | **最重要** |
| 4 | 聯絡成功頁 | 路人 | Phase 1 |
| 5 | LINE 通知卡片 | 飼主（被動接收）| Phase 1 |

Screen 3 是整個產品最重要的畫面：路人掃到 NFC 的第一眼，決定他會不會幫忙。

---

## 設計原則（Screen 3）
- 溫暖、可信、簡潔、有緊迫感
- 第一屏必須看到：寵物照片 + 名字 + 主要 CTA
- 三個 CTA：「聯絡飼主」、「我找到牠了」、「帶去附近獸醫」
- 不能像後台 dashboard，不能有太多文字

---

## 資料庫結構（規劃中）
```sql
owners   (id, line_uid, email, name, created_at)
pets     (id, owner_id, name, species, breed, birth_date, chip_id, avatar_url, bio)
nfc_tags (id, pet_id, tag_uid, activated_at)
scan_logs(id, tag_id, scanned_at, lat, lng, scanner_line_uid)
```

---

## 當前進度
- [x] 產品定義完成
- [x] 設計規格書完成
- [x] 技術選型確認
- [x] Claude Skills 安裝完成
- [x] CLAUDE.md 更新 PetNFC 專案設定
- [ ] 帳號申請中（GitHub / Vercel / Supabase / LINE Developers）
- [ ] Next.js 專案初始化
- [ ] Supabase 資料表建立
- [ ] LINE Bot & LINE Login 設定
- [ ] Screen 3（公開頁）開發
- [ ] Screen 1-2（飼主流程）開發
- [ ] LINE 推播串接

---

## 下一步（等帳號申請完成後）
1. 申請順序：GitHub → Vercel（用 GitHub 登入）→ Supabase（用 GitHub 登入）→ LINE Developers（用 LINE 手機登入）
2. 確認帳號後：`npx create-next-app@latest petnfc` 建立專案
3. 優先開發 Screen 3（NFC 公開頁）作為 demo 用

---

## 帥熊老大的協作方式
告訴 Claude 這三件事，Claude 自己搞定程式：
1. **誰在用？**（飼主／路人／獸醫？）
2. **他做什麼動作？**
3. **完成後應該看到什麼？**
