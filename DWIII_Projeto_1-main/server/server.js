const http = require("http")
const fs = require("fs")
const path = require("path")

const port = 3000

const server = http.createServer((req, res) => {
    let filePath = ""

    if (req.url === "/") {
        filePath = "../index.html"
    }
    else if (req.url === "/quemsomos") {
        filePath = "../quemsomos/quemsomos.html"
    }
    else if (req.url === "/produtos") {
        filePath = "../produtos/produtos.html"
    }
    else if (req.url === "/produtos/prod1") {
        filePath = "../produtos/prod1/prod1.html";
    } 
    else if (req.url === "/produtos/prod2") {
        filePath = "../produtos/prod2/prod2.html";
    } 
    else if (req.url === "/produtos/prod3") {
        filePath = "../produtos/prod3/prod3.html";
    }
    else if (req.url === "/assets/style.css") {
        filePath = "../assets/style.css"
    }  
    else {
        const filePath = "../error/404.html"; // arquivo de erro
        fs.readFile(path.resolve(filePath), (err, data) => {
            if(err){
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("<h1>Erro no servidor</h1>");
                return;
            }
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end(data);
        });
        return;
    }

    //Le arquivo
    fs.readFile(path.resolve(filePath), (err, data) => {
        if (err) {
            res.writeHead(500)
            res.end("Erro no servidor")
            return
        }

        const ext = path.extname(filePath)
        const contentType = ext === ".css" ? "text/css" : "text.html"

        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})