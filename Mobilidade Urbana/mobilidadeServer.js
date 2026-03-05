// carrega módulos
var http = require('http');
var url = require('url');

// Interfaces simuladas
class Veiculo { mover(){} }
class TransporteFactory {
    criarVeiculo1() {}
    criarVeiculo2() {}
}

// Veículos concretos
class Carro extends Veiculo { mover(){ return "Carro andando..."; } }
class Onibus extends Veiculo { mover(){ return "Ônibus rodando..."; } }
class Helicoptero extends Veiculo { mover(){ return "Helicóptero voando..."; } }
class Aviao extends Veiculo { mover(){ return "Avião decolando..."; } }

// Fábricas concretas
class TerrestreFactory extends TransporteFactory {
    criarVeiculo1(){ return new Carro(); }
    criarVeiculo2(){ return new Onibus(); }
}
class AereoFactory extends TransporteFactory {
    criarVeiculo1(){ return new Helicoptero(); }
    criarVeiculo2(){ return new Aviao(); }
}

// função callback
var callback = function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
    var parts = url.parse(request.url);

    if(parts.pathname == "/terrestre"){
        let factory = new TerrestreFactory();
        response.end(factory.criarVeiculo1().mover() + "\n" + factory.criarVeiculo2().mover());
    } else if(parts.pathname == "/aereo"){
        let factory = new AereoFactory();
        response.end(factory.criarVeiculo1().mover() + "\n" + factory.criarVeiculo2().mover());
    } else {
        response.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"});
        response.end("Modalidade não encontrada");
    }
};

// cria servidor
var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor mobilidade em http://localhost:3000");
