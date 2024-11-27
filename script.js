const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');


weightInput.addEventListener('input', () => {
  const value = weightInput.value.replace(',', '').replace('.', ''); // Remove vírgulas e pontos
  if (!isNaN(value)) {
    const formattedValue = (parseFloat(value) / 10).toFixed(1);
    weightInput.value = formattedValue;
  }
});

heightInput.addEventListener('input', () => {
  const value = heightInput.value.replace(',', '').replace('.', ''); // Remove vírgulas e pontos
  if (!isNaN(value)) {
    const formattedValue = (parseFloat(value) / 100).toFixed(2);
    heightInput.value = formattedValue;
  }
});

document.getElementById('calculate').addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const display = document.getElementById('result');

  if (!weight || !height) {
    alert('Por favor, insira valores válidos!');
    return;
  }

  const imc = (weight / (height * height)).toFixed(2);

  display.classList.add('blink');
  setTimeout(() => {
    display.textContent = imc;
    setTimeout(() => display.classList.remove('blink'), 400);
  }, 200);

  let classification = '';
  if (imc < 18.5) classification = 'Abaixo do peso';
  else if (imc < 24.9) classification = 'Peso normal';
  else if (imc < 29.9) classification = 'Sobrepeso';
  else classification = 'Obesidade';

  document.getElementById('classification-text').textContent = classification;
});