import { login_user } from "./api/gameAuth";

const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.querySelector(".password-input");
const eyeOpenIcon = document.querySelector(".lucide-eye");
const eyeCloseIcon = document.querySelector(".lucide-eye-off");

togglePassword.addEventListener("click", function () {
  let type = passwordInput.getAttribute("type");
  // Toggle the eye slash icon
  eyeOpenIcon.style.display = type === "password" ? "none" : "block";
  eyeCloseIcon.style.display = type === "password" ? "block" : "none";

  // Toggle the type attribute
  type = type === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});

const loginForm = document.querySelector(".submit-btn");
loginForm.addEventListener("click", function () {
//   event.preventDefault(); // Prevent the default form submission

  // Get the values from the input fields
  const username = document.querySelector(".username-input").value;
  const password = passwordInput.value;

  // Perform your login logic here
  console.log("Username:", username);
  console.log("Password:", password);

  login_user({ userName: username, password: password })
    .then((response) => {
      console.log("Login successful:", response);
      // Handle successful login (e.g., redirect to another page, show a success message)
    })
    .catch((error) => {
      console.error("Login failed:", error);
      // Handle login failure (e.g., show an error message)
    });

    // Optionally, you can reset the form after submission
    //   loginForm.reset();
});
