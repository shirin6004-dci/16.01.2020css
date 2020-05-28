const fs = require('fs')



function saveContent(content,path) { 
 fs.appendFileSync(path , content)

 }

 module.exports = {
    saveContent
 }