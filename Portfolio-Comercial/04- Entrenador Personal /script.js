/* ========================
   CALCULADORA IMC (BMI)
   ======================== */
const form = document.getElementById('bmi-form');
const resultText = document.getElementById('result-text');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recarga

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validar
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultText.innerHTML = "Por favor ingresa valores válidos.";
        return;
    }

    // Fórmula: Peso (kg) / Altura (m)^2
    // Convertimos cm a metros
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Bajo Peso";
        color = "#f1c40f"; // Amarillo
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Peso Normal";
        color = "#2ecc71"; // Verde
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Sobrepeso";
        color = "#e67e22"; // Naranja
    } else {
        category = "Obesidad";
        color = "#e74c3c"; // Rojo
    }

    // Mostrar Resultado
    resultText.innerHTML = `
        Tu IMC es: <span style="color: ${color}; font-size: 1.5rem;">${bmi}</span>
        <br>
        Categoría: <strong style="color: ${color}">${category}</strong>
    `;
});