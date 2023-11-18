import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let items = [
  'Wellcome to your to do list',
  "Press '+' sign to add new items",
  '<-- Click this box to delete item',
];

app.get('/', (req, res) => {
  const d = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const today = d.toLocaleDateString('en-US', options);
  res.render('index.ejs', { date: today, items: items });
});

app.post('/', (req, res) => {
  const item = req.body.newItems;
  items.push(item);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
