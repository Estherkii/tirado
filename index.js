<script>

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  // Valores
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;

  // Expresiones
  const nameRegex = /^[a-zA-Z]+$/; // Solo letraS
  const emailRegex = /\S+@\S+\.\S+/; // Formato email

  // Validaciones
  let isValid = true;

  if (!name) {
    isValid = false;
    displayError("name", "Rellene este campo");
  } else if (!nameRegex.test(name)) {
    isValid = false;
    displayError("name", "El nombre solo puede incluir letras");
  } else {
    displaySuccess("name");
  }

  if (!email) {
    isValid = false;
    displayError("email", "Rellene este campo");
  } else if (!emailRegex.test(email)) {
    isValid = false;
    displayError("email", "El correo electrónico debe tener un formato válido");
  } else {
    displaySuccess("email");

  }

  if (!password) {
    isValid = false;
    displayError("password", "Rellene este campo");
  } else if (password.length > 8) {
    isValid = false;
    displayError("password", "La clave debe tener como máximo 8 caracteres");
  } else {
    displaySuccess("password");
  }

  if (!confirmPassword) {
    isValid = false;
    displayError("confirmpassword", "Rellene este campo");
  } else if (password !== confirmpassword) {
    isValid = false;
    displayError("confirmpassword", "Las claves no coinciden");
  } else {
    displaySuccess("confirmpassword");
  }

 if (!isValid) {
  event.preventDefault(); // Para que no se envíe
} else {
  // Añade la imagen de verificación
  const verificationImage = document.createElement("img");
  verificationImage.setAttribute("src", "successicon.png");
  verificationImage.setAttribute("alt", "successicon.png");
  form.appendChild(successicon);
  alert("Inscripción correcta");
}

function displayError(id, message) {
  const input = document.getElementById(id);
  input.style.borderColor = "red";
  input.style.backgroundImage = "url('erroricon.png')";
  input.setCustomValidity(message);
}

function displaySuccess(id) {
  const input = document.getElementById(id);
  input.style.borderColor = "green";
  input.style.backgroundImage = "none";
  input.setCustomValidity("");
}

</script>