function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 0
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>` 
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/dia250.png'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde250.png'
    } else {
        img.src = 'imagens/noite250.png'
    }
    
}


