const express = require('express');
const bodyParser = require('body-parser')

const config = {
    port: 3000
}

const app = express();
const routes = require('./routes/routes');

app.set('view engine', 'ejs')
    .set('views', 'views')
    .use('/public', express.static('public'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(require('prerender-node'))
    .use(routes)

app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});