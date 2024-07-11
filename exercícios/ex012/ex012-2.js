var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatemente ${hora} horas.`)
/*
if (hora >= 6 && hora < 12) {
    console.log(`De manhã`)
}
if (hora >= 12 && hora < 18) {
    console.log(`De tarde`)
} else if (hora >= 18) {
    console.log(`De noite`)
} else if (hora >= 0 && hora < 6){
    console.log(`De madrugada`)
} */
if (hora >= 0 && hora < 6) {
    console.log(`De madrugada`)
} else if (hora < 12) {
    console.log(`De manhã`)
} else if (hora <= 18) {
    console.log(`De tarde`)
} else if (hora > 18) {
    console.log(`De noite`)
} 