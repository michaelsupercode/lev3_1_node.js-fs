const fs = require('fs');

if (!fs.existsSync('./file/content.txt')) {
    fs.mkdirSync('./file');
}

function add(line) {
    fs.appendFile('./file/content.txt', line + '\n', (err) => {
        if (err) throw err;
        console.log("..wrote to file..");
    });
}

add('wtf5');