function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || idade > 110) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/cm250.png')
                document.body.style.background = '#428492'

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jm250.png')
                document.body.style.background = '#312e25'

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/am250.png')
                document.body.style.background = '#8b784e'

            } else {
                //Idoso
                img.setAttribute('src', 'imagens/im250.png')
                document.body.style.background = '#234d66'

            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/cf250.png')
                document.body.style.background = '#afbebe'

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jf250.png')
                document.body.style.background = '#e0e0de'

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/af250.png')
                document.body.style.background = '#9c4a32'

            } else {
                //Idoso
                img.setAttribute('src', 'imagens/if250.png')
                document.body.style.background = '#945e44'

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}