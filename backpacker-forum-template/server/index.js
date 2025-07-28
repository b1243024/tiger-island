
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: '歡迎來到旅遊論壇', content: '這是第一篇文章' },
    { id: 2, title: '你最推薦的城市？', content: '來分享你的旅行故事吧！' }
  ]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
