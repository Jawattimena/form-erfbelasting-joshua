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

// DATEPICKER ------------------------------------------------------------------
const input = document.querySelector('input[type="date"]');
// hier haal ik de input van type date op vanuit het HTML document

const datum = new Date();
// Hier haal ik de actuele datum open

input.max = datum.toISOString().split("T")[0];
// Hier stel ik de maximale datum in op de huidige datum.
// De toISOString() methode geeft de datum in ISO-formaat terug,
// en split("T")[0] haalt alleen het datumsdeel eruit, zonder de tijd.
// Hierdoor kunnen gebruikers geen toekomstige datums selecteren in het datepicker veld.

datum.setMonth(datum.getMonth() - 8);
// Hier bepaal ik de minimale datum vanaf vandaag wat -8 maanden is

input.min = datum.toISOString().split("T")[0];
// Hier stel ik de minimale datum in.

// (bronnen:)
// https://claude.ai/share/78c36aaa-4c7b-4b9a-ac5d-8a72929b921f
