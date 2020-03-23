const express = require('express');
const bodyParser = require('body-parser')
const compression = require('compression')

const port = process.env.PORT || 3001

const app = express();
const routes = require('./routes/routes');

app.set('view engine', 'ejs')
    .set('views', 'views')
    .use(compression())
    // app.use((req, res, next) => {
    //     res.header('Cache-Control', 'max-age=2592000000');
    //     next();
    // })
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(require('prerender-node'))
    .use(routes)

app.listen(port, function() {
    console.log(`Application started on port: ${port}`);
}); 