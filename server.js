const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/calculadoraresposta', (req, res) => {
    if (req.query.op === "/") {
        if (req.query.numero2 === '0' || req.query.numero2 === '') {
            res.send(`Não é possível dividir por zero, indeterminação`)
        } else {
            const numero1 = parseInt(req.query.numero1);
            const numero2 = parseInt(req.query.numero2);
            res.send(`o resultado de ${numero1} dividdo por ${numero2} é: ` + numero1 / numero2);
        }
    }
    console.log(req.query)
});
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});

