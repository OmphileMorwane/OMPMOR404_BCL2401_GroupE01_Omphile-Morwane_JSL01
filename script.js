function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  let regex = /^pet_[0-9a-z+$]/gi;

  if (regex.test(input)) {
    result = 'Valid Syntax <span class="valid"></span>';
  } else {
    result = 'Invalid Syntax <span class="invalid"></span>';
  }
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerHTML = result;
}
