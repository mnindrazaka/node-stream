const stream = require('stream');

function * generate() {
    yield "lorem"
    yield "ipsum"
    yield "dolor"
    yield "sit"
    yield "amet"
}

function readableStreamFlowingMode() {
    let data = ""

    const readableStream = stream.Readable.from(generate())

    readableStream.on("data", (chunk) => {
        console.log("chunk received : ", chunk)
        data += chunk
    })

    readableStream.on("end", () => {
        console.log("stream completed with data : ", data)
    })

    readableStream.on("error", (err) => {
        console.log("error happens : ", err)
    })
}

function readableStreamPausedMode() {
    let data = ""
    let chunk = ""

    const readableStream = stream.Readable.from(generate())

    readableStream.on("readable", () => {
        while((chunk = readableStream.read()) != null) {
            console.log("chunk received : ", chunk)
            data += chunk
        }
    })

    readableStream.on("end", () => {
        console.log("stream completed with data : ", data)
    })

    readableStream.on("error", (err) => {
        console.log("error happens : ", err)
    })
}

readableStreamFlowingMode()
readableStreamPausedMode()