
function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = 0

var hora = data.getHours()
msg.innerHTML = `<p>Agora são <strong>${hora} horas</strong>.</p>`

if (hora >= 0 && hora < 12) {

    img.src = 'imagens/manha250.png'
    document.body.style.background = '#c7a687'

} else if (hora >= 12 && hora < 18) {

    img.src = 'imagens/tarde250.png'
    document.body.style.background = '#1f2f48'
} else {

    img.src = 'imagens/noite250.png'
    document.body.style.background = '#031734'

}

}