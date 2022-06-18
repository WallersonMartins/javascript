function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERROR] Not Found Data")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'imagem/criança-m.png')
                } else if (idade < 21) {
                    img.setAttribute('src', 'imagem/adolescente-m.png')
                } else if (idade < 55) {
                    img.setAttribute('src', 'imagem/adulto-m.png')
                } else  {
                    img.setAttribute("src", "imagem/idoso-m.png")
                }
                } else if (fsex[1].checked) {
                genero = 'Mulher'
                }
                if (idade >= 0 && idade <= 10) {
                        img.setAttribute("src", "imagem/criança-f.png")
                    } else if (idade < 21) {
                        img.setAttribute("src", "imagem/adolescente-f.png")
                    } else if (idade < 55) {
                        img.setAttribute("src", "imagem/adulto-f.png")
                    } else  {
                        img.setAttribute("src", "imagem/idoso-f.png")
                }
        res.innerHTML = `Encontramos ${genero} com ${idade} Anos`
        res.appendChild(img)
    }
}