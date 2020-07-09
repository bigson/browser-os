const {arrayBufferToBase64} = require('@/utils/index')

const server = {
    methods : {
        captionHtmlElement(){
            throw 'Error'
        }
    }
}

const client = {
    methods :  {
        async captionHtmlElement(){
            let
                // canvas = document.createElement('canvas'),
                // canvas  = document.getElementById('canvas'),
                // ctx     = canvas.getContext('2d'),
                desktop = document.querySelector('.desktop'),
                styles  = document.querySelectorAll('style'),
                html    = desktop.innerHTML.replace(/<img [^>]+/gi, '$&/'),
                regex   = RegExp(/url\(("|')([^"']+)("|')\)/, 'gi'),
                regexImg = RegExp(/<img([^>]*)(src=("|')([^"']+)("|'))/, 'gi'),
                urls    = {},
                promiseAll = [],
                matchStyle,
                matchHtml

                styles = Object.values(styles).map(x => x.innerHTML).join('')

                matchStyle = styles.matchAll(regex)
                matchHtml  = html.matchAll(regexImg)

                for(let i of matchStyle){
                    if(!urls[i[2]]){
                        urls[i[2]] = {url : i[2], data : ''}
                    }
                }
                for(let i of matchHtml){
                    if(!urls[i[4]]){
                        urls[i[4]] = {url : i[4], data : ''}
                    }
                }
                console.log(urls)
                // convert image url → base64
                for(let i in urls){
                    promiseAll.push(new Promise((resolve) => {
                        resolve(this.getImageFromUrl(i))
                    }).then(base64 => urls[i].data = base64))
                }

                await Promise.all(promiseAll)

                styles = styles.replace(regex,
                                        function() {
                                            return `url("${urls[arguments[2]].data}")`
                                        })

                // html = html.replace(regexImg,
                //                     function(){
                //                         return arguments[0].replace(arguments[4], urls[arguments[4]].data)
                //                     })

                let data   = `
                <svg xmlns="http://www.w3.org/2000/svg" width="${desktop.offsetWidth}" height="${desktop.offsetHeight}">
                    <foreignObject width="${desktop.offsetWidth}" height="${desktop.offsetHeight}" style="transform: translate(0, 0);">
                        <div class="desktop" xmlns="http://www.w3.org/1999/xhtml" style="width:${desktop.offsetWidth}px;height:${desktop.offsetHeight}px;">
                            <style>${styles}</style>
                            ${html}

                        </div>
                    </foreignObject>
                </svg>`

                var DOMURL = window.URL || window.webkitURL || window;

                // var img = new Image();
                var svg = new Blob([data], {
                  type: 'image/svg+xml;charset=utf-8'
                });
                var url = DOMURL.createObjectURL(svg);

                console.log( url, data)
                // this.s = url

                // img.onload = function() {
                //   ctx.drawImage(img, 0, 0);


                //     var img    = canvas.toDataURL("image/png");
                //     DOMURL.revokeObjectURL(url);
                // }

                // img.src = url;
        },

        async getImageFromUrl(url){

            if(!url.startsWith('//')){
                url = location.protocol + url
            }else if(url.startsWith('/')){
                url = location.origin + url
            }

            return await fetch(url)
                .then(response => response.arrayBuffer())
                .then(buffer => {
                    let _url       = url.split('.'),
                        ext        = _url[_url.length-1],
                        base64Flag = 'data:image/'+ext+';base64,',
                        imageStr   = arrayBufferToBase64(buffer)

                    return (base64Flag + imageStr)
                })
        },


    }
}

// `VUE_ENV` can be injected with `webpack.DefinePlugin`
export default process.env.VUE_ENV === 'server' ?
    server :
    client
