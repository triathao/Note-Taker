const fs = require('fs')
const notesRecords = require('../db/db.json')

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notesRecord);
    });


    app.post("/api/notes", function (req, res) {
        if (notesRecord.length === 0){
            req.body.id = 0
        } else {
            req.body.id = notesRecord.length
        }

        notesRecord.push(req.body)
        updateDb(notesRecord)
        res.json(req.body)
    })


    function updateDb(notes) {
        notes = JSON.stringify(notes)
        console.log(notes)
        fs.writeFileSync('db/db.json', notes, err => {
            if (err) throw err
        })
    }


    app.delete("/api/notes/:id", function(req,res) {
        for(var i = 0; i < notesRecord.length; i++){
            if(notesRecord[i].id === parseInt(req.params.id)){
                console.log(`Deleting: ${notesRecord[i].title}`)
                notesRecord.splice(i,1)
                updateDb(notesRecord)
            }
        }


    })
}