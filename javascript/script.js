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

// FORM VALIDATION ------------------------------------------------------------------------
// (Bronnen:)
// https://share.google/aimode/ilPDBV96S5Gk2LzfM
// https://share.google/aimode/OtdLKwa9AWIZxmeSe
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/noValidate
// https://chatgpt.com/share/69b8345f-bc60-800c-b22a-84f9416bdd91
// https://www.youtube.com/watch?v=rsd4FNGTRBw
// https://chatgpt.com/share/69b8345f-bc60-800c-b22a-84f9416bdd91
// https://chatgpt.com/share/69b83ec9-0488-800c-8030-f5c8bc9d4718
// Hulp van Victor
const formulier = document.querySelector("form");

// als javascript werkt op de browser dan word de standaard validation van HTML hiermee verwijdert
formulier.noValidate = true;

// Oproepen van alle text input
const textDateInputs = document.querySelectorAll(
  "input[type=text], input[type=date]"
);

textDateInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    const volgende = input.nextElementSibling;

    if (volgende && volgende.classList.contains("foutmelding")) {
      if (input.value.trim() !== "") {
        volgende.remove();
      }
    }
  });
});

formulier.addEventListener("submit", function (e) {
  // Hier voert hij de functie checkInputs uit
  // Hier scrolt de pagina naar de 1e foutmelding
  let geldig = checkInputs();
  let eersteFout = this.querySelector(".foutmelding");

  if (eersteFout) {
    eersteFout.scrollIntoView({ behavior: "smooth", block: "center" });
    this.querySelector("input").focus();
  }

  if (!geldig) {
    e.preventDefault();
  }
});

// Hier defineer ik de value check van de verschillende input types
// trimm zorgt er voor dat het alle wit ruimtes verwijdert dus als de gebruiker perongeluk spaties heeft ingevult bij een required inputveld maar niks heeft ingevuld dan word het verwijdert
function checkInputs() {
  let geldig = true;

  document.querySelectorAll(".foutmelding").forEach((el) => el.remove());
  textDateInputs.forEach(function (textDateInput) {
    // Visability van de text input
    // checked of dei required is en checked of het invoer veld wel ingevuld is
    const isVisible = textDateInput.offsetParent !== null;
    const required = textDateInput.validity.valueMissing;

    // Als de text input leeg is voor dan dit uit
    if (isVisible && required) {
      // Hier geeft hij aan de het fout is
      geldig = false;

      // Hier maak ik de melding aan en geef ik het een styling
      let melding = document.createElement("div");
      melding.className = "foutmelding";
      melding.innerText = "Dit veld is verplicht";
      melding.style.color = "var(--invalid-bordrer)";
      melding.style.margin = "0.3em 0em 0em 0.3em";
      melding.style.fontSize = "0.8em";

      // Hier voeg ik de div(melding) toe als siblng van het inputveld in de div.
      textDateInput.insertAdjacentElement("afterend", melding);
    }
  });

  return geldig;
}

// ------------------------------------------------------------------------
