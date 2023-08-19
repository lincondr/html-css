function carregar() {
    var img = document.getElementById('image')
    var tnum = document.getElementById('txtnum')
    var nm = Number(tnum.value)
    var crew = document.getElementById('crew-name')
    if (nm = 1) {
        crew.innerHTML = `Luffy - ${nm}`
        img.src = 'imagens/luffy.png'
        document.body.style.background = '#ee7979'
    }


}

function clicou() {
    var tnum = document.getElementById('txtnum')
    var nm = Number(tnum.value)
    var crew = document.getElementById('crew-name')
    var img = document.getElementById('image')
    switch (nm) {
        case 1:
            img.src = 'imagens/luffy.png'
            crew.innerHTML = `Luffy - ${nm}`
            document.body.style.background = '#ee7979'
            break
        case 2:
            img.src = 'imagens/zoro.png'
            crew.innerHTML = `Zoro - ${nm}`
            document.body.style.background = '#57ca34'
            break
        case 3:
            img.src = 'imagens/sanji.png'
            crew.innerHTML = `Sanji - ${nm}`
            document.body.style.background = '#f4f75c'
            break
        case 4:
            img.src = 'imagens/nami.png'
            crew.innerHTML = `Nami - ${nm}`
            document.body.style.background = '#f0a037'
            break
        case 5:
            img.src = 'imagens/usopp.png'
            crew.innerHTML = `Usopp - ${nm}`
            document.body.style.background = '#6290a1'
            break
        case 6:
            img.src = 'imagens/robin.png'
            crew.innerHTML = `Nico Robin - ${nm}`
            document.body.style.background = '#7b4fc4'
            break
        case 7:
            img.src = 'imagens/chopper.png'
            crew.innerHTML = `Chopper - ${nm}`
            document.body.style.background = '#8efcfc'
            break
        case 8:
            img.src = 'imagens/franky.png'
            crew.innerHTML = `Franky - ${nm}`
            document.body.style.background = '#b9dbdb'
            break
        case 9:
            img.src = 'imagens/brook.png'
            crew.innerHTML = `Brook - ${nm}`
            document.body.style.background = '#3b017286'
            break
        default:
            img.src = 'imagens/luffy5.png'
            crew.innerHTML = 'Secret luffy Gear 5'
            document.body.style.background = 'linear-gradient(to right, #d6d2d2, #5e6df596)'
    }
}






