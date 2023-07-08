const express = require('express');
const calculator = require("./utils/calculator");
const app = express();
const porta = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {result:''});
});

app.get('/calculadoraresposta', (req, res) => {
    const result = calculator(req.query.numero1, req.query.numero2, req.query.op)
    res.render('index', {result});
});
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});