document.querySelector('.donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const plants = document.getElementById('plants').value;
    const amount = document.getElementById('amount').value;
    const payment = document.getElementById('payment').value;

    // Show the details
    const detailsSection = document.getElementById('details');
    detailsSection.style.display = 'flex';

    // Insert the details into the section
    detailsSection.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number of Plants:</strong> ${plants}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Payment Method:</strong> ${payment}</p>
    `;

    // Move the form to the left
    document.querySelector('.donation-container').classList.add('moved');
});
