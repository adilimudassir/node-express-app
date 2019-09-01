const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

app.use(
    morgan('combined')
);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    debug(chalk(`Listening on port ${chalk.green(3000)}`))
})