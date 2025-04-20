function calculateBmi(weight, heightInMeters) {
    return weight / (heightInMeters * heightInMeters);
};

module.exports = calculateBmi;