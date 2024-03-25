const form = document.getElementById('form');
const campoB = document.getElementById('campo-b');
const campoA = document.getElementById('campo-a');

function resultadoCorreto (campoB, campoA){
    return campoB > campoA; 
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = resultadoCorreto(campoB.value, campoA.value)
    if(!validarForm){
        alert('Campo A está maior que campo B, incorreto!')
    } else {
        alert('Campo B maior que campo A, correto!')
    }
})