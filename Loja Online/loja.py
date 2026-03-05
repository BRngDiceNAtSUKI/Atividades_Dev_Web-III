from flask import Flask

# Interfaces
class CartaoCredito: 
    def pagar(self): pass
class Boleto: 
    def emitir(self): pass

# Banco A
class CartaoCreditoA(CartaoCredito):
    def pagar(self): return "Pagamento com cartão Banco A"
class BoletoA(Boleto):
    def emitir(self): return "Emitindo boleto Banco A"

# Banco B
class CartaoCreditoB(CartaoCredito):
    def pagar(self): return "Pagamento com cartão Banco B"
class BoletoB(Boleto):
    def emitir(self): return "Emitindo boleto Banco B"

# Fábricas
class BancoFactory:
    def criar_cartao(self): pass
    def criar_boleto(self): pass

class BancoAFactory(BancoFactory):
    def criar_cartao(self): return CartaoCreditoA()
    def criar_boleto(self): return BoletoA()

class BancoBFactory(BancoFactory):
    def criar_cartao(self): return CartaoCreditoB()
    def criar_boleto(self): return BoletoB()

# Flask app
app = Flask(__name__)

@app.route("/bancoA")
def bancoA():
    factory = BancoAFactory()
    return factory.criar_cartao().pagar() + " | " + factory.criar_boleto().emitir()

@app.route("/bancoB")
def bancoB():
    factory = BancoBFactory()
    return factory.criar_cartao().pagar() + " | " + factory.criar_boleto().emitir()

if __name__ == "__main__":
    app.run(port=3000)
