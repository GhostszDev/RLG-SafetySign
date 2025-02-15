var express = require('express');
var router = express.Router();
const fs = require('fs');
const cors = require('cors');

const corsOptions = {
    origin: "https://ghostszdev.github.io"
}

// GET method route
router.get('/', cors(corsOptions), async (req, res) => {
    await fs.readFile('JSON/data.JSON', 'utf8', (err, jsonData) => {

        if (err) {
            res.status(400);
            console.error('Error 35: ', err);
        } else {
            try {
                const data = JSON.parse(jsonData);
                console.log(jsonData);
                res.status(200);
                res.send(data);
            } catch (err) {
                res.status(400);
                console.error('Error 303: ', err);
            }
        }
    });


})

// POST method route
router.post('/', cors(corsOptions), async (req, res) => {

    const newDate = {
        date: req.body.date
    }

    await fs.writeFile('./JSON/data.JSON', JSON.stringify(newDate), (err) => {
        if(err){
            console.error('Error: ', err);
        } else {
            console.log('Successfully wrote to file!');
            res.send({success: "Successfully wrote to file!"});
        }
    });
})



module.exports = router;
