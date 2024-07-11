function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var prb = window.document.getElementById('prb')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#EBD6A9'
        prb.innerHTML = `Bom Dia!`
        
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#B0C7F8'
        prb.innerHTML = `Boa Tarde!`
    } else {
        document.body.style.backgroundColor = '#515154'
        img.src = 'imagens/noite.png'
        prb.innerHTML = `Boa Noite!`
    }

}