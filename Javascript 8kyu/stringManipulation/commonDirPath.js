function getCommonDirectoryPath(pathes) {
let output = pathes[0];

for(let i=1; i<pathes.length; i++){
  for(let j=0; j<pathes[i].length; j++){
    if(output[j] != pathes[i][j]){
      output = output.substring(0,j);
    }
  }
}

let indexer = output.lastIndexOf("/");
if(indexer != -1){
  output = output.substring(0,indexer+1);
}

return output;

}

console.log(getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png'])) // => '/web/images/'
// console.log(getCommonDirectoryPath(['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'])) //=> ''
// console.log(getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha',  '/read.me'])) // => '/'
// console.log(getCommonDirectoryPath(['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs']))  //=> '/'

/**
 * Yesi Pseudo
 * breakup string by "/"
 check if strings are equal to eachother 
 if they are add it to new arr
 then return arr and covert it to string
 */