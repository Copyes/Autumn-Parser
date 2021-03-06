const cssParser = require('./css-parser')
const htmlParser = require('./html-parser')


module.exports = function convert (
    html = '',
    css = '',
    js = '',
    autumnFileContent = ''
) {
    if (autumnFileContent !== '') {

    }
    return new Promise((resolve, reject) => {
        cssParser(css, htmlParser.htmlParser(html)).then(cssString => {
            resolve({
                html: `<head><meta charset='utf-8'></head>${htmlParser.renderToHtml(htmlParser.htmlParser(html))}`,
                css: cssString,
                js: ''
            })
        })
    })
}
//renderToHtml(htmlParser(html))