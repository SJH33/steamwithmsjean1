document.addEventListener("DOMContentLoaded", function() {
    window.openPopup = function(title, description) {
        document.getElementById("popup-title").innerText = title;
        document.getElementById("popup-description").innerText = description;
        document.getElementById("class-popup-overlay").style.display = "block";
        document.getElementById("class-popup").style.display = "block";
    };

    window.closePopup = function() {
        document.getElementById("class-popup").style.display = "none";
        document.getElementById("class-popup-overlay").style.display = "none";
    };

    document.getElementById("email-signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("email-signup").value;
        
        fetch('https://script.google.com/macros/s/AKfycbwrTjbBJKhfca2lsmi0JwTYfwfTXOrFAAmuNQgxgPabuln7SYSpmkucAtiOa11euy8/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'email=' + encodeURIComponent(email)
        }).then(response => {
            if (response.ok) {
                document.getElementById("success-popup-overlay").style.display = "block";
                document.getElementById("success-popup").style.display = "block";
            }
        }).catch(error => console.error('Error:', error));
    });
});

