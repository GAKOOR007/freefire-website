const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/articles', (req, res) => {
  res.json([
    { id: 1, title: 'أفضل الشخصيات', content: 'هذا هو دليل الشخصيات...' },
    { id: 2, title: 'مقارنة الأسلحة', content: 'هذا هو دليل الأسلحة...' }
  ]);
});

app.post('/api/comments', (req, res) => {
  const { name, email, message } = req.body;
  console.log({ name, email, message });
  res.status(201).json({ message: 'تم إرسال التعليق بنجاح!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});