const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/calculadoraresposta', (req, res) => {
    let num1 = req.query.numero1;
    let num2 = req.query.numero2;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (Number.isNaN(num1)){
        num1=0;
    }
    if (Number.isNaN(num2)){
        num2=0;
    }
    if (req.query.op === "/") {
        if (num2 == 0 || num2 == '') {
            res.send(`Não é possível dividir por zero! Indeterminação!`)
        } else {
            let resultado = num1 / num2;
            res.send(`o resultado de ${num1} dividdo por ${num2} é: `+resultado);
        }
    }
    else if (req.query.op === "+"){
        let resultado = num1+num2;
        res.send(`<p>o resultado da soma de  ${num1} e ${num2} é: </p>` + resultado);
    }
    else if (req.query.op === "-"){
        let resultado = num1-num2;
        res.send(`<p>o resultado da subtração de  ${num1} e ${num2} é: </p>` + resultado );
    }
    else if (req.query.op === "*"){
        let resultado = num1*num2;
        res.send(`<p>o resultado da multiplicação de  ${num1} por ${num2} é: </p>` + resultado);
    }
    console.log(req.query)
});
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});