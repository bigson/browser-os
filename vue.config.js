const glob = require('glob')

module.exports = {
    productionSourceMap : false,
    configureWebpack: config => {
        let all     = glob.sync('./src/**/*.scss'),
            style   = [],
            head    = []

        if (process.env.NODE_ENV === 'production') {
            all.forEach(function(e, i){
                console.log(e)
                if(e.match((/.*\.head\.scss/))){
                    head.push(e)
                }else if(!e.match(/.*\.module\.scss/)){
                    style.push(e)
                }
            })

            config.entry.head  = head
            config.entry.style = style
        } else {
            config.entry.style = all
        }

    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/config/variables.scss";`
            },
        }
    },
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/template.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index', 'head', 'style']
        }
    },
}