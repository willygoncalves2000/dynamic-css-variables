const root = document.documentElement;

function changeValue(id, value) {
    // verifica se o input passado em id se refere ao Position ou Border-Radius para aplicar a %
    // Se input Position ou input Border-Radius, entao aplica %
    // Se input Color, então aplica ''
  
    const prop = (id != 'background' && id != 'color' && id!='size' ? '%' : '');
    root.style.setProperty(`--${id}`, value + prop);

    
}
const span = document.getElementById("p-text");
function setText(value){
    span.innerHTML = value;
}