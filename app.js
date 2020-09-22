const BTC = document.querySelector(`.price`)
const BTC2 = document.querySelector(`.price2`)
const BTC3 = document.querySelector(`.price3`)

const ETH = document.querySelector(`.e-price`)
const ETH2 = document.querySelector(`.e-price2`)
const ETH3 = document.querySelector(`.e-price3`)

const EOS = document.querySelector(`.eos-price`)
const EOS2 = document.querySelector(`.eos-price2`)
const EOS3 = document.querySelector(`.eos-price3`)

const Http = new XMLHttpRequest();
const url = 'https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CRipple%2CLitecoin%2CEOS&vs_currencies=USD%2CGBP%2CEUR';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=()=>{
    let info = JSON.parse(Http.responseText)
    console.log(info)
    BTC.innerHTML = `${JSON.stringify(info["bitcoin"]["usd"])} $`
    BTC2.innerHTML = `${JSON.stringify(info["bitcoin"]["usd"])} £`
    BTC3.innerHTML = `${JSON.stringify(info["bitcoin"]["eur"])} €`

    ETH.innerHTML = `${JSON.stringify(info["ethereum"]["usd"])} $`
    ETH2.innerHTML = `${JSON.stringify(info["ethereum"]["gbp"])} £`
    ETH3.innerHTML = `${JSON.stringify(info["ethereum"]["eur"])} €`

    EOS.innerHTML = `${JSON.stringify(info["eos"]["usd"])} $`
    EOS2.innerHTML = `${JSON.stringify(info["eos"]["gbp"])} £`
    EOS3.innerHTML = `${JSON.stringify(info["eos"]["eur"])} €`

}

//Page 2
const readMoreBtn = document.querySelector(`.rm-button`)
const holder = document.querySelector(`.c1`)

let c = true
console.log(c)
readMoreBtn.onclick = ()=>{
    if (c){
        console.log("casa")
        holder.style.height = "95px"
        c = false
        console.log(c)
    }else{
        holder.style.height = "50px"
        c = true
    }

}