function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  let regex = /^pet_[a-zA-Z0-9]+$/;

  if (regex.test(input)) {
    result = "Valid Syntax";
  } else {
    result = "Invalid Syntax";
  }
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerText = result;
}
