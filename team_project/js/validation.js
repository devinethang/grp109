  // Set weeks to hidden by default
  document.getElementById('week-6-21').style.display = 'none';
  document.getElementById('week-6-14').style.display = 'none';
  document.getElementById('week-6-07').style.display = 'none';
  document.getElementById('week-5-31').style.display = 'none';
  document.getElementById('week-5-24').style.display = 'none';
  document.getElementById('week-5-17').style.display = 'none';
  document.getElementById('week-5-10').style.display = 'none';

  // Dropdown logic for showing/hiding validation weeks
  const select = document.getElementById('validation-week-select');
  const weeks = {
    '6-21': document.getElementById('week-6-21'),
    '6-14': document.getElementById('week-6-14'),
    '6-07': document.getElementById('week-6-07'),
    '5-31': document.getElementById('week-5-31'),
    '5-24': document.getElementById('week-5-24'),
    '5-17': document.getElementById('week-5-17'),
    '5-10': document.getElementById('week-5-10')
  };

  // Add event listener to the select element
  select.addEventListener('change', function () {
    Object.values(weeks).forEach(div => div.style.display = 'none');
    weeks[this.value].style.display = '';
  });
  
  // Set default to 6-21
  select.value = '6-21';
  weeks['6-21'].style.display = '';