let num = [13,42,11,34,5,6,79,8]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor 8 está na posição ${pos}`)   
}
