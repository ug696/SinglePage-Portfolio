# SinglePage Portfolio

這是一個使用 **HTML / CSS / JavaScript** 製作的單頁式個人作品集網站，包含 About、Skills、Projects、Contact 等區塊，並依照課程要求完成 Git / GitHub 操作、A/B 測試以及 GitHub Pages 部署。

---

## 🌐 GitHub Pages 部署網址

本專案已部署於 GitHub Pages：

**https://ug696.github.io/SinglePage-Portfolio/**

---

##  Skills 區塊 A/B 測試說明

本次作業針對 Skills 區塊製作兩種版本，分別在兩個分支開發，並各自建立 Pull Request。

### **A 版本：進度條版本（採用）**
- 分支：`feature/skills-bars`  
- PR：#2 — *Add progress bar version*（已合併）

**採用原因：**
- 清楚呈現技能熟練度
- 版較好控制
- 風格一致

---

### **B 版本：標籤雲版本（未採用）**
- 分支：`feature/skills-tags`  
- PR：#1 — *Add skills tag cloud version*（未合併）

**原因：**
- 標籤雲較難一眼看出技能強弱
- 在小螢幕上排版較不整齊
- 視覺效果較不符合目前網站的風格

---

## ♻️ Git Revert 操作說明

在本次作業中，我針對某次不必要的暫存修改，使用了 `git revert` 進行版本回復。

**回復的 commit：**  
- `Revert "暫存修改"`
我在這次作業中使用 `git revert` 回復了 commit **「暫存修改」**。當時進行版面測試時，做了一些臨時性的修改並push出去。


---
## 學習心得撰寫
在本次挑戰中我先是請copilot幫我寫一個完整架構，但後來發現看不太懂，於是我先跑去網路上學習html的一些基礎觀念，初步瞭解<head> <body>還有一些可以創造按鈕還有打字匡的功能之後，才回過頭來重新修改copilot給我的架構。在做的過程中也遇到很多要push出去的困難，有時候是分支沒切好，有時候是忘記儲存導致要加入暫存區時很常是空的，甚至偶爾只是改一個小地方，就會讓整個版面或是原本的功能跑掉。透過自己這樣摸索還有跟gpt對話，慢慢知道這整個架構還有一些邏輯觀念。但我對於我的排版還有一些功能還是沒有很滿意，因為時間的關係來不及再去學css 跟script，但至少我對於網站架構有了一個初步的認識，希望之後能不靠ai，靠自己的能力打出一個完整的架構，還有學習一些比較快的語法，縮短打那麼多行的時間。