


const perfomance = performance.getEntries()
console.log(perfomance[0].type)

if(!perfomance[0].type){
    document.querySelector('.div').innerHTML = "IT FROM NFC!"
}else {
    document.querySelector('.div').innerHTML = `${perfomance[0].type}`
}