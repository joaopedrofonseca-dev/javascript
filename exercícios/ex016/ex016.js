let num = [1, 5, 6, 8, 3]
num.push(9)
num.sort()
//console.log(num)

/*
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O último elemento do vetor é ${num[5]}`) 

Código for usado de forma menos simplificada:

for (let pos = 0; pos < num.length; pos ++) {
    num.sort()
    console.log(`A posição ${pos} possui o valor ${num[pos]}.`)
}
*/

 for (let pos in num) {
    console.log(`A posição ${pos} possui o valor ${num[pos]}.`)
}


let pos = num.indexOf(5)
console.log(`O vetor possui ${num.length} posições.`)
if (pos == -1) {
    console.log(`Não foi possível encontrar este elemento!`)
} else {
    console.log(`O valor está na posição ${pos}.`)
}


