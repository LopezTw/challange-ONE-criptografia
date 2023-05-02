let textarea = document.getElementById("texto");
let areaResultado = document.getElementById("area-transferencia");

let btnCriptografar = document.querySelector(".enviar-criptografar");
btnCriptografar.addEventListener("click", function(evento) {
    evento.preventDefault();
    let textoInserido = textarea.value;
    let substituir = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat" 
    };
    
    for(let letra in substituir) {
        let expressao = new RegExp(letra, "g");
        textoInserido = textoInserido.replace(expressao, substituir[letra]);
    }
    

    let resultado = textoInserido; // substitua pelo resultado real do processamento
    
    areaResultado.value = resultado;
});

let btnDescriptografar = document.querySelector(".enviar-descriptografar");
btnDescriptografar.addEventListener("click", function(evento) {
    evento.preventDefault();

    textoRecebido = textarea.value;
    let substituir = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    for(let letra in substituir) {
        let expressao = new RegExp(letra, "g");
        textoRecebido = textoRecebido.replace(expressao, substituir[letra]);
    }

    let resultado = textoRecebido;

    areaResultado.value = resultado;

});

/* ==== OBSERVAÇÕES ====

    - Utilizei LET ao invés de VAR pra conseguir repetir o nome de algumas variaveis.
    - RegExp foi utilizado para conseguir criptografar apenas letras minusculas.

*/