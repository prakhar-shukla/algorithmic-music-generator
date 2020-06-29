const { spawn } = require('child_process');
const fs = require('fs');

function generateNewMusic(req, res) {

    const FILE_NAME = "outputMusic.wav";
    
    const python = spawn('python', ['python_modules/main.py']);
    python.on('close', function (code) {
        res.download(FILE_NAME, FILE_NAME, (err) => {
            if (err) {
                res.status(500).send({
                    message: "Error occurred while generating music"+err
                });
            }
            else {
                fs.unlink(FILE_NAME, (err) => {
                    if (err) {
                        console.error("Error while deleting file");
                    }
                    else {
                        console.log("File deleted");
                    }
                });
            }
        });
    });
}

module.exports.generateNewMusic = generateNewMusic;