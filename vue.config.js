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
                }else{
                    style.push(e)
                }
            })

            config.entry.head  = head
            config.entry.style = style
        } else {
            config.entry.style = all
        }

    },
}