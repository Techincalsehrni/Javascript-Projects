const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);  //parseInt() is a function used to convert a string into an integer
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (!height || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (!weight || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI Index : ${bmi}</span> <br> You are Underweight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI Index : ${bmi}</span> <br> You are all ok`;
    } else {
      results.innerHTML = `<span>Your BMI Index : ${bmi}</span> <br> You are Overweight`;
    }
  }
});


// console.log(parseInt("42")); // Output: 42
// console.log(parseInt("42px")); // Output: 42 (stops parsing at non-digit character)
// console.log(parseInt("abc")); // Output: NaN (no valid number at the start)
