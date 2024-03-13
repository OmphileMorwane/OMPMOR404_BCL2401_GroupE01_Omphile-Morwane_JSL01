// Validating the syntex of the input.
function validateSyntax() {
  let input = document.getElementById("petInput").value; // Get the value of the input field with the id "petInput"

  let result = ""; // Placeholder for validation result

  let regex = /^pet_[0-9]{4}[a-z]+$/gi; //Regex to match the input syntax.

  //Verify if the input conforms to the regular expression.
  if (regex.test(input)) {
    result = 'Valid Syntax <span class="valid"></span>'; //This code sets the results to indicate valid syntax if the input matches the regular expression.
  } else {
    result = 'Invalid Syntax <span class="invalid"></span>'; //This code sets the results to indicate invalid syntax if the input does not matche the regular expression.
  }
  //Changed the .innerText to .innerHTML to update the HTML content of an element with the id"result" to display the validation result.

  document.getElementById("result").innerHTML = result;
}
