const sottrai = (num1, num2) => num1 - num2

function dividi(num1, num2) {
    return (num1 / num2).toFixed(2)
}

const eseguiOperazine = (num1, num2, risultato) => risultato(num1, num2)

console.log(eseguiOperazine(8, 4, sottrai));
console.log(eseguiOperazine(145, 65, dividi));

