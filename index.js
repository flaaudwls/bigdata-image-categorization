const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");

app.use(express.static(__dirname + '/src'));



const dir = './src/input/images';
fs.readdir(dir, (err, files) => {

    console.log('Number of Files ', files.length)

    app.get("/", (req, res) => {
        res.render('index.ejs', { data: files.length });
    });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));