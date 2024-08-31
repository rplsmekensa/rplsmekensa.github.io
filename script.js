document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.hero-left p');
    const textContent = textElement.textContent;
    let index = 0;
    let forward = true;

    function typeEffect() {
        if (forward) {
            textElement.textContent = textContent.slice(0, ++index);
            if (index === textContent.length) {
                forward = false;
                setTimeout(typeEffect, 1000); 
            } else {
                setTimeout(typeEffect, 100);
            }
        } else {
            textElement.textContent = textContent.slice(0, --index);
            if (index === 0) {
                forward = true;
                setTimeout(typeEffect, 1000);
            } else {
                setTimeout(typeEffect, 50);
            }
        }
    }

    typeEffect();
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Periksa apakah semua field sudah diisi
    if (name === '' || email === '' || message === '') {
        alert('Mohon lengkapi semua field sebelum mengirim pesan.');
        return;
    }

    let whatsappMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    
    let phoneNumber = '6283144682312';

    // Redirect ke WhatsApp
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
});
