# Unsplash API

This project uses the Unsplash API to display images from Unsplash. It has an overview page and detail page that displays more details.

<img src="https://user-images.githubusercontent.com/43671292/78031689-2d2bf200-7364-11ea-926c-1ac2678f52f4.png" width="1400">

## Live demo
[Direct link](https://pwa-giovanni.herokuapp.com/)
```
https://pwa-giovanni.herokuapp.com/
```

## Features

- [x] Service worker
- [x] Offline mode
- [x] Server side rendering
- [x] Optimized the critical rendering path
- [x] Use gzip compression
- [x] Browser caching
- [x] Service worker caching
- [x] Add minifying with webpack

## Description 📝
This project uses the Unsplash API to display images from Unsplash. It has an overview page and detail page that displays more details. The main goal of this project is to render pages over the server side, to enchance the loading time of your page.

## API 🐒
The data used throughout the application is from the Unsplash API ```https://api.unsplash.com```.

Because i call the API, from different links the data can vary.
The data has i.e. the following structure:
```javascript
{
  total: 4637,
  total_pages: 464,
  results: [
    {
      id: 'zGzXsJUBQfs',
      created_at: '2019-05-27T14:30:15-04:00',
      updated_at: '2020-03-28T01:02:28-04:00',
      promoted_at: null,
      width: 3000,
      height: 2000,
      color: '#180906',
      description: null,
      alt_description: 'man on black cruiser motorcycle in highway',
      urls: [Object],
      links: [Object],
      categories: [],
      likes: 820,
      liked_by_user: false,
      current_user_collections: [],
      user: [Object],
      sponsorship: [Object],
      tags: [Array]
    },...]
}
```


## Performance 
> These are some of the things that i did to increase the performance of the website.

### Server side rendering 
Because the pages are being rendered on the server, the fetches that are thrown are much faster and vastly increase the building of the DOM. 

### Service worker
The service worker caches all the stylesheets and js files. It also caches an offline page. When the user is offline and there is a page that isn't cached the service worker shows the offline page. This greatly increases the speed the pictures and pages load in.

### Compression
Using a simple package i can compress all the files with GZIP, this saves a lot of file size and also increases the performance of the server. 
```js
app.use(compression())
```
## Browser caching
This caches the different pages, it caches certain requests and serves them the next time you visit, the page will then be loaded in instantly.
```js
app.use((req, res, next) => {
        res.header('Cache-Control', 'max-age=2592000000');
        next();
    })
```

## Lazy loading
Lazy loading images makes the images request load in at the same time, instead of loading them in one by one. Also users with a slow internet connecting will still be able to see the first content of the site.

```html
<img loading="lazy" src="<%=data.results[i].urls.small%>" alt="image">
```

## Minifying 
My build process includes minifying the css and the javascript files. This way it decreases the size of files by removing all of the unnecessary characters and throwing everything on one line. I use webpack for this, and you can build the files by just running `npm run build`

<details>
<summary>Code details</summary>

```js
const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: {
        index: "./public/js/script.js",
        style: "./public/css/style.css",
    },
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [{
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new FixStyleOnlyEntriesPlugin(),
        new OptimizeCSSAssetsPlugin({})
    ]
}
```

</details>

Webpack also minifies the Js by using ```webpack --mode=production```

## Conclusion
##### Je snapt het verschil tussen client side en server side renderen en kan server side rendering toepassen voor het tonen van data uit een API
  * Het voordeel van server side renderen tegenover client side renderen is dat server side minder vaak calls moet maken tussen de client en de server. Op de server is maar 1 call nodig om een pagina te serveren.
##### Je begrijpt hoe een Service Worker werkt en kan deze in jouw applicatie op een nuttige wijze implementeren.
  * Een serviceworker wordt vooral gebruikt om een ​​offline ervaring voor de gebruiker te creëren. Met het gebruik van een serviceworker, krijgt de gebruiker toch content te zien wanneer hij geen internet heeft. Naast het creëren van een offline ervaring, wordt het ook gebruikt om de prestaties van de site te verbeteren door verschillende dingen in de cache te plaatsen voor het volgende bezoek.
##### Je begrijpt hoe de critical rendering path werkt, en hoe je deze kan optimaliseren
* Het critical rendering path bestaat uit de stappen die voor de browser nodig zijn voordat de browser een pagina aan de gebruiker kan serveren. Ik heb dit geoptimaliseerd door compression te gebruiken, minify te gebruiken en door afbeeldingen 'lazy' in te laden.

<img width="800" src="https://github.com/kylebot0/progressive-web-apps-1920/blob/master/gh-images/6b78bb51e57ec3ba45ed2418e5f748fe.png">

> The result of google chrome lighthouse



## Installing
To install this application and enter the repo write the following into your terminal:
```
git clone https://github.com/GiovanniKaaijk/progressive-web-apps-1920.git && cd progressive-web-apps-1920
```

Because this project uses different modules, you'll have to npm install to get the different dependecies
```
npm install
```
Run the app
```
npm run dev
```
Webpack build
```
npm run build
```
## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.