


const perfomance = performance.getEntries()
console.log(perfomance[0].type)

if(!perfomance[0].type){
    document.querySelector('.div').innerHTML = "IT FROM NFC!"
}else {
    document.querySelector('.div').innerHTML = "regular ass navigate or som"
}