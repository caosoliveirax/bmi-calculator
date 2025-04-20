const prompt = require('prompt-sync')();
const calculateBmi = require('./bmiCalculator');

const height = parseInt(prompt('Digite altura em cm: '), 10);
const weight = parseFloat(prompt('Digite o peso em quilos: '));

function validateData (height, weight) {
    let isValid = true;

    if (height <= 0) {
        console.log('Erro: A altura deve ser maior que zero.');
        isValid = false;
    }

    if (weight <= 0) {
        console.log('Erro: O peso deve ser maior que zero.');
        isValid = false;
    }

    return isValid;
};

// Validar dados
const isValid = validateData(height, weight);

if (isValid) {
    //Converter cm em metros
    const heightInMeters = height / 100;

    //Calculo IMC
    const bmi = calculateBmi(weight, heightInMeters);
    const bmiFormatted = bmi.toPrecision(4);

    console.log('O resultado do IMC é:', bmiFormatted);
} else {
    console.log('Por favor, corrija os erros acima.');
}
