const postcss = require('postcss')
module.exports = postcss.plugin('img-check', function(option){
    return function(root){
        let mapClassLabel = {}
        //let objs = htmlParser(html)
        option.objs.forEach((obj) => {
            if(obj.class && obj.class[0]){
                mapClassLabel[`${obj.class[0]}`] = obj.name
            }
        })
        console.log(mapClassLabel)
        
        let count = 0
        let temp = 0
        root.walkRules(rule => {
            if(mapClassLabel[rule.selector.replace('.','')] === 'img'){
                count++
                rule.walkDecls(/content-mode/, declare => {
                    temp++
                })
            }
        })
        if(count !== temp){
            const err = new Error('请检查你的图片样式有没有content-mode属性')
            console.error(err.message)
        }
        // root.walkDecls((declare) => {
        //     if(/width|height|padding|margin|border-radius|top|left|right|bottom/.test(declare.prop)){
        //         declare.cloneBefore({ prop: '-autumn-' + declare.prop })
        //         declare.remove()
        //     }
        // })
    }
})