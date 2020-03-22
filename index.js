const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors')
const fs = require('fs')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/',(req,res,next)=>{
    res.send("Hello There");
})

app.get('/generate', (req, res, next) => {
    var dataToSend;
    var fileName = "output2.wav"
    console.log("Generating File")
    const python = spawn('py', ['python-model/main.py'])
    python.stdout.on('data', function (data) {
        dataToSend = data.toString();
    })

    python.on('close', function (code) {
        console.log("Closed process ", code);
        console.log("File Generated");
        res.download(fileName, fileName, (err) => {
            if (err) {
                console.error("Error while downloading file")
            }
            else {
                console.log("File downloaded")
            }
            fs.unlink(fileName, (err) => {
                if (err) {
                    console.error("Error while deleting file")
                }
                console.log("File deleted")
            })
        });

    })

})


app.listen(PORT, () => {
    console.log(`Listning on PORT ${PORT}`);
})