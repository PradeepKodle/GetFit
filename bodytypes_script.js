function calculateBodyType() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const chest = parseFloat(document.getElementById('chest').value);
  const hip = parseFloat(document.getElementById('hip').value);
  const waist = parseFloat(document.getElementById('waist').value);

  if (isNaN(height) || isNaN(weight) || isNaN(chest) || isNaN(hip) || isNaN(waist)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  let bodyType;
  let explanation;

  if (waist / hip < 0.8) {
    bodyType = 'A';
    explanation = "Your body type is 'A'. This indicates a pear-shaped body with wider hips compared to the waist: \"Triangle Body Type\"";
  } else if (waist / chest < 0.8) {
    bodyType = 'B';
    explanation = "Your body type is 'B'. This indicates an inverted triangle-shaped body with a wider chest compared to the waist: \"Inverted Triangle Body Type\"";
  } else if (waist / chest >= 0.8 && waist / hip >= 0.8) {
    if (weight / (height / 100) ** 2 < 24) {
      bodyType = 'C';
      explanation = "Your body type is 'C'. This indicates a rectangular-shaped body with similar measurements for chest, waist, and hips: \"Rectangular Body Type\"";
    } else {
      bodyType = 'D';
      explanation = "Your body type is 'D'. This indicates an apple-shaped body with a wider waist compared to the chest and hips: \"Round Body Type\"";
    }
  }

  document.getElementById('result').innerText = explanation;
}
