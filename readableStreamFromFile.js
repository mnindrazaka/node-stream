const fs = require("fs")


function readableStreamFlowingMode() {
    const readableStream = fs.createReadStream("lorem.txt", { encoding: "utf8" })
    let data = ""

    readableStream.on("data", (chunk) => {
        console.log("chunk received : ", chunk)
        data += chunk
    })

    readableStream.on("end", () => {
        console.log("stream complete with data : ", data)
    })

    readableStream.on("error", (err) => {
        console.log("stream error : ", err)
    })
}

function readableStreamPausedMode() {
    const readableStream = fs.createReadStream("lorem.txt", { encoding: "utf8" })
    let data = ""
    let chunk = ""

    while((chunk = readableStream.read()) != null) {
        console.log("chunk received : ", chunk)
        data += chunk
    }

    readableStream.on("end", () => {
        console.log("stream complete with data : ", data)
    })

    readableStream.on("error", (err) => {
        console.log("stream error : ", err)
    })
}

readableStreamFlowingMode()
readableStreamPausedMode()