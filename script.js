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


  function openPopup(title, description) {
            document.getElementById("popup-title").innerText = title;
            document.getElementById("popup-description").innerText = description;
            document.getElementById("class-popup-overlay").style.display = "block";
            document.getElementById("class-popup").style.display = "block";
        }
        
        function closePopup() {
            document.getElementById("class-popup").style.display = "none";
            document.getElementById("class-popup-overlay").style.display = "none";
        }

    
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Simulate sending data (You can integrate a backend later)
            console.log("User Info:", { name, email, password });

            // Show success message (Modify as needed)
            alert("Sign-up successful! Welcome, " + name);

            // Redirect to homepage after sign-up
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    window.openPopup = function(title, description, dates) {
        document.getElementById("popup-title").innerText = title;
        document.getElementById("popup-description").innerText = description;
        document.getElementById("popup-dates").innerText = dates;
        document.getElementById("class-popup-overlay").style.display = "block";
        document.getElementById("class-popup").style.display = "block";
    };

    window.closePopup = function() {
        document.getElementById("class-popup").style.display = "none";
        document.getElementById("class-popup-overlay").style.display = "none";
    };
});
