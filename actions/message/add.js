module.exports = (server) => {
    return function(req,res,next){

        if (req.busboy) {
            var fs = require('fs-extra');
            var fstream;
            req.pipe(req.busboy);

            req.busboy.on('file', function (fieldname, file, filename) {
                console.log("Uploading: " + filename);

                //Path where image will be uploaded
                console.log(__dirname + "/../../tmp/" + filename);
                fstream = fs.createWriteStream(__dirname + "/../../tmp/" + filename);
                file.pipe(fstream);
                fstream.on('close', function () {
                    console.log("Upload Finished of " + filename);
                    var json = JSON.parse(fs.readFileSync(__dirname + "/../../tmp/" + filename, 'utf8'));
                    console.log(json);
                    for (var k in json) {
                        server.models.message.create(json[k]).then(function () {
                            res.send("");
                        });
                    }
                });
            });
        } else {
            server.models.message.create(req.body).then(function () {
                server.models.message.findAll().then(function (messages) {
                    res.send(messages)
                })
            });
        }
    }
};
