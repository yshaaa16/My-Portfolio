document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = `Thank you for your message, ${name}! We'll get back to you at ${email}.`;
    formMessage.style.color = 'green';
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
