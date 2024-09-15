// public/js/main.js
document.getElementById('bookingForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, date })
    });

    if (response.ok) {
        alert('Appointment booked successfully!');
    } else {
        alert('Failed to book appointment.');
    }
});
