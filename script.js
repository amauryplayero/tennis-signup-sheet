


const perfomance = performance.getEntries()
console.log(perfomance)

if(!perfomance[0].type){
    document.querySelector('.div').innerHTML = "IT FROM NFC!"
    console.log(perfomance)
}else {
    document.querySelector('.div').innerHTML = `${perfomance[0].type}`
    console.log(perfomance)
}