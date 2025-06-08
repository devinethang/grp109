  // Set weeks to hidden by default
  document.getElementById('week-5-31').style.display = 'none';
  document.getElementById('week-5-24').style.display = 'none';
  document.getElementById('week-5-17').style.display = 'none';
  document.getElementById('week-5-10').style.display = 'none';

  // Dropdown logic for showing/hiding validation weeks
  const select = document.getElementById('validation-week-select');
  const weeks = {
    '5-31': document.getElementById('week-5-31'),
    '5-24': document.getElementById('week-5-24'),
    '5-17': document.getElementById('week-5-17'),
    '5-10': document.getElementById('week-5-10')
  };
  select.addEventListener('change', function () {
    Object.values(weeks).forEach(div => div.style.display = 'none');
    weeks[this.value].style.display = '';
  });
  // Set default to 5-31
  select.value = '5-31';
  weeks['5-31'].style.display = '';