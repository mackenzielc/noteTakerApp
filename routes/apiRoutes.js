//DEPENDENCIES
//We need to include the fs package to access our db.json in the file system
const fs = require('fs');

//ROUTING
module.exports = (app) => {
    //API GET Requests - handles when a user visits a page
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData)
        });
    });

    //API POST Request - handles when a user submits a form, thus submits data to the server
    app.post('/api/notes', (req, res) => {
        const noteBody = req.body;

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            dbData.push(noteBody)
            let idNumber = 1;
            dbData.forEach((note, index) => {
                note.id = idNumber;
                idNumber++;
                return dbData
            });
            console.log(dbData);
            stringData = JSON.stringify(dbData);
            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if (err) throw err;
            });
        });
        res.send('Your note was added!')

    });
};