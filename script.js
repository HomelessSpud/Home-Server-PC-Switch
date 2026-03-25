function power() {
    fetch('/api/power', {
        method: 'POST',
        headers: { 'X-Auth': 'YOUR_SECRET_TOKEN' }
    })
        .then((response) => response.json())
        .then(() => alert('Power command sent'))
        .catch((error) => alert('Error: ' + error));
}

const togglePowerButton = document.getElementById('toggle-power');
if (togglePowerButton) {
    togglePowerButton.addEventListener('click', power);
}
