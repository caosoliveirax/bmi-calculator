import { getBmiResults } from './bmiCalculator.js';

$('.btn-calculator').on('click', function(e) {
    const height = $('#height').val();
    const weight = $('#weight').val();
    
    const bmiResults = getBmiResults(height, weight);

    $('.error-message').remove();
    $('#height, #weight').removeClass('error');

    if (bmiResults.errors) {
        bmiResults.errors.forEach(error => {
            if (error.includes('altura')) {
                $('#height').addClass('error').after(`<span class="error-message">${error}</span>`);
            }
            if (error.includes('peso')) {
                $('#weight').addClass('error').after(`<span class="error-message">${error}</span>`);
            }
        });
    } else { 
        $('.card').addClass('flipped')
        $('#result span').text(bmiResults.bmi);
        $('#result h3').text(bmiResults.category);
        $('#result').addClass('show');
    }
});

$('.btn-back').on('click', function() {
    $('#height').val('');
    $('#weight').val('');
    
    $('#result span').text('');
    $('#result p').text('');

    $('.card').removeClass('flipped')
    $('#result').removeClass('show');
});

