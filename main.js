function pegarNum() {
    var resp = document.getElementById('number').value
    var respostF = 0; 
    var res = document.getElementById('result')

    if (! /^[01]+$/.test(resp)) {
            return alert("Por favor, digite um número binário");
        }
    
    respostF = parseInt(resp,2)
    
    res.innerHTML = respostF
}
