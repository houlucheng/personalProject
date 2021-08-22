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