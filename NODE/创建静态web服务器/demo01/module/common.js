const fs = require('fs')

exports.getMime = (path) => {
  switch(path){
    case ".html" :
      return "text/html"
    case ".js" :
      return "text/js"
    case ".css" :
      return "text/css"
  }

}

exports.getMimeType = (type) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./module/data/mime.json', (err, data) => {
      if (err) {
        console.log(err);
        // reject(err)
        return
      }
      resolve(JSON.parse(data.toString())[type])
    })
  })
}