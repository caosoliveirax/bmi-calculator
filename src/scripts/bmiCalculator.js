export function validateData(height, weight) {
    const errors = [];

    if (height <= 0) {
        errors.push('Insira sua altura');
    }

    if (weight <= 0) {
        errors.push('Insira seu peso');
    }

    return errors;
}

function categorizeBmi(bmi) {
    if (bmi <= 18.5) {
        return 'Abaixo do normal';
    } else if (bmi > 18.5 && bmi <= 24.9) {
        return 'Normal';
    } else if (bmi > 24.9 && bmi <= 29.9) {
        return 'Sobrepeso';
    } else if (bmi > 29.9 && bmi <= 34.9) {
        return 'Obesidade grau 1';
    } else if (bmi > 34.9 && bmi <= 39.9) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}

function calculateBmi(weight, heightInMeters) {
    return weight / (heightInMeters ** 2);
};

export function getBmiResults(height, weight) {
    const errors = validateData(height, weight);

    if (errors.length > 0) {
        return { errors };
    }

    const heightInMeters = height / 100;
    const bmi = calculateBmi(weight, heightInMeters);
    const bmiFormatted = parseFloat(bmi.toFixed(2));
    const category = categorizeBmi(bmiFormatted);

    return {bmi: bmiFormatted, category}
}