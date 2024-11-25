//Arquivo principal

//variaveis
var _passo = [];
var _html = `
<div class="CaixaDePergunta"> 
<h2>${hist()['Pergunta']}</h2>
<div>${Res()}</div>
</div>
`
_title = "Esolha suas repostas";
document.getElementById("cont").innerHTML = _html;
function Res() {
  var r = "<div class='bnt'>";
    for (var i = 0; i < hist()['Respostas']; i++) {
      console.log(i)
      r += "<button onclick='Ran(" + i + ","+(hist()['Respostas' + i]["Final"])+");'>" + hist()['Respostas' + i]['Titulo'] + "</button>";
    }
  r+="</div>"
  return r;
}
function hist() {
  var s = "P0";
  for (var i = 0; i < _passo.length; i++) {
    s += "R" + _passo[i];
  }
  return _historias[s];
}
function Ran(e,f) {
  if(f == -1){
  _passo.push(e);
  _html = `
  <div class="CaixaDePergunta"> 
  <h2>${hist()['Pergunta']}</h2>
  <div>${Res()}</div>
  </div>
`
document.getElementById("cont").innerHTML = _html;
}
else{

  _title = "Fim";
_html=`
  <div class="CaixaDePergunta">
  <h1>Fim</h1>
  <h2>${_historias["F"+f]}</h2>
  </div>
`
document.getElementById("cont").innerHTML = _html;
}
}
