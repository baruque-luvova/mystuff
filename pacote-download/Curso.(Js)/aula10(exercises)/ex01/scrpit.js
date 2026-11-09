let num = document.querySelector('input#fnum')

let lista = document.querySelector('select#flista')

let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1 ){
    return true
  }else{
    return false
  }
}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
valores.push(Number(num.value))
let item = document.createElement('option') // cria tags dentro do arquivo HTML
item.text = `Valor  ${num.value} adicionado`

lista.appendChild(item)
res.innerHTML =''
 // serve para adicionar um elemento HTML dentro de outro elemento HTML. 

  }else{
    window.alert('Estás a fazer lixo, esse valor é invalido ou já se encontra na lista.')
  }
  num.value = '' // serve para limpar o conteúdo dentro

  num.focus() // serve para manter aquele sinal de pisca
}

function finalizar(){
  if(valores.length == 0){
    window.alert('Estás a fazer lixo!, adicione valores antes de finalizar.')
  }else{
    let tot = valores.length
    let maior = valores[0] //indica o primeiro valor

    let menor = valores[0] //indica o primeiro valor

    let soma = 0
    let media = 0
    for(let pos in valores) { // para cada valor em valores
      soma += valores[pos] // vai somar todos os valores dentro
      
      if (valores[pos] > maior)
        maior = valores[pos] // ele vai verificar se o número na posição atribuida é maior, senão ele vai indo procurando 
      if (valores[pos] < menor)
        menor = valores[pos] // ele vai verificar se o número na posição atribuida é menor, senão ele vai indo procurando 
    }
    media = soma / tot
    res.innerHTML =''
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p> `
    res.innerHTML += `<p> O maior valor informado foi ${maior} </p> `
    res.innerHTML += `<p>O menor valor informado foi ${menor} </p> `
    res.innerHTML += `<p>Somando todos os valores, temos ${soma} </p> `
    res.innerHTML += `<p> A média dos valores digitados é ${media} </p> `
  }
}