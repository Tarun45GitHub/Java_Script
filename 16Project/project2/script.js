const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height))
    result.innerHTML = `please give a valid hight ${height}`;
  else if (weight == '' || weight < 0 || weight == NaN)
    result.innerHTML = `please give a valid hight ${weight}`;
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
