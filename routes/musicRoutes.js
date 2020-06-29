const musicBridge = require('../music_bridge/musicBridge')

module.exports = (app) => {
    app.get('/api/test', (req, res) => {
        res.send("Hello There");
    });

    app.get('/api/generate', (req, res) => {
        musicBridge.generateNewMusic(req, res);
    });
}