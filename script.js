function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  let regex = /^pet_[a-zA-Z0-9]+$/;

  if (regex.test(input)) {
    result = 'Valid Syntax <span class="greenDot"></span>';
  } else {
    result = 'Invalid Syntax <span class="redDot"></span>';
  }
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerHTML = result;
}
