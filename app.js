const express = require('express');
const port = 3000;
const app = express();
const postsRouter = require('./routers/posts');

app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nelle mie ricette</h1>');
});

app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
