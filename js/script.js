var inputAdulto = document.getElementById('adulto')
var inputCrianca = document.getElementById('crianca')
var inputHora = document.getElementById('hora')
inputAdulto.addEventListener('keyup', enter)
inputCrianca.addEventListener('keyup', enter)
inputHora.addEventListener('keyup', enter)

function enter(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById('btn').click()
    }
}

function calcular() {
    if (inputAdulto.value.length === 0 || inputCrianca.value.length === 0 || inputHora.value.length === 0) {
        alert('ERRO! você esqueceu algum dos valores, por favor preencha todos os dados!')
    } else {
        let res = document.getElementById('res')
        let adulto = Number(inputAdulto.value)
        let crianca = Number(inputCrianca.value)
        let hora = Number(inputHora.value)
        let resCarne, resCerva, resRefri

        if (hora <= 6) {
            resCarne = (0.4 * adulto) + (0.2 * crianca)
            resCerva = 1.2/0.355 * adulto
            resRefri = (adulto + (0.5 * crianca)) / 2
        } else {
            resCarne = (0.65 * adulto) + (0.325 * crianca)
            resCerva = 2/0.35 * adulto
            resRefri = ((1.5 * adulto) + (0.75 * crianca)) / 2
        }

        res.innerText = ''
        res.innerText += 'Serão necessários:\n'
        res.innerText += `${resCarne.toFixed(2)}Kg de carne\n`
        res.innerText += `${Math.ceil(resCerva)} latas de cerveja\n`
        res.innerText += `${Math.ceil(resRefri)} garrafas de refrigerante\n`
    } 
}