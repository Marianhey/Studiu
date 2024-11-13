const correctUsername = "utilizator";
        const correctPassword = "parola123";

        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            if (username === correctUsername && password === correctPassword) {
                alert("Autentificare reușită!");
                errorMessage.style.display = "none";
                
                window.location.href = "pagina_principala.html";
            } else {
                errorMessage.style.display = "block";
            }
        }