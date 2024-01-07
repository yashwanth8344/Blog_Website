// Sample blog posts (you can add more)
// Updated sample blog posts (including two additional posts)
function toggleAdditionalContent() {
  var content = document.getElementById("additionalContent");
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}document.getElementById("contactForm").addEventListener("submit", function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Redirect to another page (change "redirect-page.html" to your desired page)
  window.location.href = "redirect-page.html";
});
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Process the data (you can perform actions like sending an email, saving to a database, etc.)
    // For example:
    // Send an email
    $to = "yashwanthr653@gmail.com";
    $subject = "New contact form submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    mail($to, $subject, $body);

    // Redirect to a thank you page after processing the form
    header("Location: thank_you.html");
    exit();
}document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const resetButton = document.querySelector('.reset-button');

  contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      // Here, you can perform actions like sending an email (not implemented in this example)
      // Simulate success alert
      alert('Form submitted successfully!');

      // Reset the form
      contactForm.reset();
  });

  resetButton.addEventListener('click', function () {
      // Reset the form on reset button click
      contactForm.reset();
  });
});
