const prompt = require('prompt-sync')();
const { getBmiResults } = require('./bmiCalculator');

const height = parseInt(prompt('Digite altura em cm: '), 10);
const weight = parseFloat(prompt('Digite o peso em quilos: '));

const result = getBmiResults(height, weight);

if (result.errors) {
    console.log('Erros:', result.errors.join(', '));
} else {
    console.log('Seu IMC é:', result.bmi);
    console.log('Resultado:', result.category);
}
