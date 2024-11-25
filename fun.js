//arquivo para funções diversas//
//Mudar o titulo com animação
var _title = "E";
let speed = 200;
let _titleR = "";
document.title = "E";
setInterval(() => {
    
  if(_titleR.length < _title.length){
_titleR += _title[_titleR.length];
document.title = _titleR.replaceAll("-"," ");
  }
else if(_titleR != document.title){
    _titleR = "";
}
}, speed);