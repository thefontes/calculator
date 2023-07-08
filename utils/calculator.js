const calculator = (num1, num2, op)=> {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (Number.isNaN(num1)){
        num1=0;
    }
    if (Number.isNaN(num2)){
        num2=0;
    }
    switch (op){
        case "/":
            if (num2 == 0 || num2 == '') {
                return(`Não é possível dividir por zero! Indeterminação!`)
            } else {
                return(`o resultado de ${num1} dividdo por ${num2} é: ${num1/num2}`);
            }
        case "+":
            return(`o resultado da soma de  ${num1} e ${num2} é: ${num1+num2}`);

        case "-":
            return(`o resultado da subtração de  ${num1} e ${num2} é: ${num1-num2}`);

        case "*":
            return(`o resultado da multiplicação de  ${num1} por ${num2} é: ${num1*num2}`);
    }
}
module.exports = calculator;