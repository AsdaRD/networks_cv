const fs = require('fs');
const ejs = require('ejs');

const baseFile = __dirname + '/index.ejs';

const getTranslations = (filename) => ({translation: require(__dirname + '/' + filename + '.json')}); 

const render = (filename) => {
    ejs.renderFile(baseFile, getTranslations(filename)).then((template)=> {
        fs.writeFile(__dirname + `/../src/${filename}/` + filename + '.html', template, {flag: 'w'}, (err) => console.log(err));
    });
}

render('index');
render('en');
render('ru');


