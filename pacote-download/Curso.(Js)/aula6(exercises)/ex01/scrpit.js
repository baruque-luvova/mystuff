function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
 // var hora = data.getUTCHours()
  var hora = 11
  msg.innerHTML = `agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    /* BOM DIA!*/
    img.src = 'manha.png';
    document.body.style.background = '#caa358'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png';
    document.body.style.background = '#c18b45'
    /*
    BOA TARDE!!
*/
  } else {
    img.src = 'noite.png';
    document.body.style.background = '#885934'
    
    /*
    BOA NOITE!!!
*/
  }
}
