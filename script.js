// script.js

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

function bmiCalc() {
  var age = parseFloat(document.getElementById('age').value);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  var bmi = weight / Math.pow(height / 100, 2);

  document.getElementById('bmi').value = bmi.toFixed(2);

  var resultText = document.getElementById('resultText');
  resultText.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + ' - ' + interpretBMI(bmi);
}

function clearText() {
  document.querySelectorAll('input[type="text"]').forEach(function (input) {
    input.value = '';
  });

  document.getElementById('bmi').value = '';

  var resultText = document.getElementById('resultText');
  resultText.innerHTML = '';
}
