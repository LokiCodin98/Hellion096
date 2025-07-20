 document.getElementById('calculate-edpi').addEventListener('click', () => {
    const dpi = parseFloat(document.getElementById('dpi').value);
    const sens = parseFloat(document.getElementById('sens').value);
    const result = document.getElementById('edpi-result');

    if (isNaN(dpi) || isNaN(sens)) {
      result.textContent = "Please enter valid numbers.";
      return;
    }

    const edpi = dpi * sens;
    result.textContent = `Your eDPI is: ${edpi}`;
  });

  document.getElementById('sens').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // prevent form submission or accidental refresh
    document.getElementById('calculate-edpi').click(); // trigger click
  }
});