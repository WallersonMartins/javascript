function contar() {
    let ini = document.querySelector('input#n1')
    let fim = document.querySelector('input#n2')
    let pas = document.querySelector('input#n3')
    let res = document.querySelector('div#resp')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('ERRO')
    } else { 
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(i < f){
        for (var c = i; c <= f; c += p)
            res.innerHTML += ` ${c} \u{1f449} `
        } else { 
            for (c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1f449} `   
        }
    }
        res.innerHTML += `\u{1f3c1}`
}