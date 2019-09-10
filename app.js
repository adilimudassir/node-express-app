const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const staticPath = (filePath) => express.static(path.join(__dirname, filePath));

app.use(morgan('combined'));
app.use(staticPath('/public'));
app.use('/css', staticPath('/node_modules/bootstrap/dist/css'));
app.use('/js', staticPath('/node_modules/bootstrap/dist/js'));
app.use('/js', staticPath('/node_modules/jquery/dist/'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    list: ['a', 'b'],
    title: 'Node Express App'
  });
});

app.listen(port, () => {
  debug(chalk(`Listening on port ${chalk.green(port)}`));
});
