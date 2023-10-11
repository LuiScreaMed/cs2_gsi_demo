import { generateCfgFile } from "./config.js";
import http from "http";
import { Data } from "./data/data.js";

let server = null;

function start() {
    let { fileName, port } = generateCfgFile();
    console.log(`Cfg file generated in ./cfg/${fileName}`);
    console.log("Please copy paste the cfg file to the path below:");
    console.log("*Your CS2 directory*\\game\\csgo\\cfg");

    server = http.createServer((req, res) => {
        onRequest(req, res);
    });
    server.listen(port);
    console.log(`\nServer running on port: ${port}`);
}

/**
 * Call when CS2 send data to server, only accept 'POST' request.
 *
 * CS2发送数据时执行，只接受POST请求。
 */
function onRequest(req: http.IncomingMessage, res: http.ServerResponse) {
    if (req.method != "POST") {
        res.writeHead(200, { "Content-Type": "text/html" })
        return res.end("<html><body>oof</body></html>")
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "*");
    res.writeHead(200, { "Content-Type": "text/html" });
    let body = "";
    req.on("data", (data) => body += data);
    req.on("end", () => {
        if (typeof body === "string") {
            const data: Data = JSON.parse(body);
            handleCSData(data);
        }
        res.end("");
    });
}

function handleCSData(data: Data) {
    console.log("Received data from CS2:");
    console.log(JSON.stringify(data, undefined, 4));
    console.log("=== end ===");
}

start();