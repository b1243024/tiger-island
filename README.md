
# Backpacker Forum Template

這是一個使用 React + Express 架設的簡易旅遊討論平台模板，支援 Render 部署。

## 本地啟動方式

```bash
# 啟動後端
cd server
npm install
node index.js

# 啟動前端
cd client
npm install
npm start
```

## Render 部署提示

- 對於後端：
  - Root directory: `server`
  - Build command: `npm install`
  - Start command: `node index.js`

- 對於前端：
  - Root directory: `client`
  - Build command: `npm install && npm run build`
  - Publish directory: `client/build`
