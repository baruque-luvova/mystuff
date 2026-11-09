function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('Estás a fazer lixo, vê bem!!!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = ''

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'imagens/beberapaz.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/jovemrapaz.png')
        //jovem
      } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'imagens/adultorapaz.png')
      }else {
        //idoso
        img.setAttribute('src', 'imagens/idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'imagens/bebemenina.png')
        res.style.padding = '100px'
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'imagens/jovemmenina.png')
      } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'imagens/adultamenina.png')
      }else {
        //idoso
        img.setAttribute('src', 'imagens/idosa.png')
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Dectetamos ${genero} com 
${idade} anos.`;
res.appendChild(img)
    
  }
}
// res.innerHTML = `Você tem: ${idade} de idade.`