const fs = require("fs")
const stream = require("stream")
const zlib = require("zlib")


function usingPipeline() {
    stream.pipeline(
        fs.createReadStream("lorem.txt"), 
        zlib.createGzip(), 
        fs.createWriteStream("lorem.gz"),
        (err) => {
            if (err) {
                console.error('Pipeline failed', err);
            } else {
                console.log('Pipeline succeeded');
            }
        }
    )
}

usingPipeline()

