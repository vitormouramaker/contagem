function contar() {
    var i = document.querySelector('input#txti')
    var f = document.querySelector('input#txtf')
    var p = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        //alert('[ERRO] Faltam dados!')
        res.style.color = 'red'
        res.innerHTML = 'Impossível Contar'
    }
    else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)
        if (passo <= 0) {
            alert('Passo inválido! Considerando passo 1')
            passo = 1
        }
        if (ini < fim) {
            //contagem progressiva
            for(let c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else {
            //contagem regressiva
            for(let c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}