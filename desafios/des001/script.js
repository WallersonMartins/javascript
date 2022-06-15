function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
  
    
    msg.innerHTML = `São ${hora} Horas`
    if (hora < 12) {
        //manhã
        msg.innerHTML = `Bom dia, são ${hora}:${minutos}  Horas`
        img.src = 'imagem/manha.jpg'
        img.style.border = '10px solid #163d51'
        document.body.style.background = '#163d51'

    } else if (hora >= 12 && hora < 18) {
        //tarde
        msg.innerHTML = `Boa tarde, são ${hora}:${minutos} Horas`
        img.src = 'imagem/tarde.jpg'
        img.style.border = '10px solid #b24902'
        document.body.style.background = '#b24902'

    } else {
        //noite
        msg.innerHTML = `Boa noite, são ${hora}:${minutos}  Horas`
        img.src = 'imagem/noite.jpg'
        img.style.border = '10px solid #4e3266'
        document.body.style.background = '#4e3266'

    }

}