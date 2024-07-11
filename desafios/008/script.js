function calcular() {
    var produto = window.prompt('Qual produto você está comprando?')
    var valor = window.prompt(`Qual o valor do ${produto} que você está comprando?`)
    var dado = window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
    var troco = dado - valor
    window.alert(`
    Você comprou ${produto} que custou ${valor}.
    Deu ${valor} em dinheiro e vai receber ${troco} de troco.
    Volte sempre! `)
}