const form = document.querySelector("form");
const textInput = document.querySelector(".text-input");

function validateField(field) {
  if (!field.validity.valid) {
    field.classList.add("error");
    {
      console.log("Field is invalid");
      return false;
    }
  }
  console.log("Field is valid");
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isValid = validateField(textInput);

  if (isValid) {
    console.log("Form submitted");
    // You can add code here to actually submit the form or perform other actions
  } else {
    console.log("error");
  }
});
