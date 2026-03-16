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

const formulier = document.querySelector("form");

// als javascript werkt op de browser dan word de standaard validation van HTML hiermee verwijdert
formulier.noValidate = true;

// Oproepen van alle text input
const textInputs = document.getElementsByClassName("text-input");
const datePickers = document.getElementsByClassName("datepicker");
const radioButtons = document.getElementsByClassName("radio-button");

formulier.addEventListener("submit", function (e) {
  // Hier voert hij de functie checkInputs uit
  let geldig = checkInputs();

  // Hier scrolt de pagina naar de 1e foutmelding
  let eersteFout = this.querySelector(".foutmelding");

  if (eersteFout) {
    eersteFout.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (!geldig) {
    e.preventDefault();
  }
});

// Hier defineer ik de value check van de verschillende input types
// trimm zorgt er voor dat het alle wit ruimtes verwijdert dus als de gebruiker perongeluk spaties heeft ingevult bij een required inputveld maar niks heeft ingevuld dan word het verwijdert
function checkInputs() {
  let geldig = tru e;

  document.querySelectorAll(".foutmelding").forEach((el) => el.remove());

  textInputs.forEach(function (textInput) {
    // Value van de text input
    const textInputValue = textInput.value.trim();

    // Visability van de text input
    const isVisible = textInput.offsetParent !== null;

    // required
    const required = textInput.hasAttribute("required");

    // Als de text input leeg is voor dan dit uit
    if (textInputValue === "" && isVisible && required) {
      geldig = false;
      // Hier maak ik de melding aan en geef ik het een
      let melding = document.createElement("div");
      melding.className = "foutmelding";
      melding.innerText = "Dit veld is verplicht";
      melding.style.color = "var(--invalid-bordrer)";
      melding.style.margin = "0.3em 0em 0em 0.3em";
      melding.style.fontSize = "0.8em";

      // Hier voeg ik de div(melding) toe als siblng van het inputveld in de div.
      textInput.insertAdjacentElement("afterend", melding);
    }
  });
  return geldig;
}

// ------------------------------------------------------------------------

// // Deze functie word uitgevoerd wanneer je op submit klikt
// formulier.addEventListener("submit", function (e) {
//   // Hier maak een vraiabele aan van geldig met als standaard waarde true
//   let geldig = true;

//   // Hier spreek ik alle verplichte invoervelden aan uit de HTML
//   let velden = this.querySelectorAll("[required]");

//   // Hier spreek ik ELKE LOSSE verplichte velden aan uit de HTML
//   velden.forEach(function (veld) {
//     // Check of veld zichtbaar is (of ouder zichtbaar is)
//     if (veld.offsetParent === null) return;

//     // Als het verplichte veld leeg is pas dan deze code toe (voeg de melding to in de HTML)
//     if (veld.value.trim() === "") {
//       // als dit uitgevoerd word (de velden leeg zijn) word de waarde van geldig false
//       // Standaard staat het op true
//       geldig = false;

//       // Hier maak ik de melding aan en geef ik het een
//       let melding = document.createElement("div");
//       melding.className = "foutmelding";
//       melding.innerText = "Dit veld is verplicht";
//       melding.style.color = "var(--invalid-bordrer)";
//       melding.style.margin = "0.3em 0em 0em 0.3em";
//       melding.style.fontSize = "0.8em";

//       // Hier voeg ik de div(melding) toe als siblng van het inputveld in de div.
//       veld.insertAdjacentElement("afterend", melding);
//     }
//   });

//   // Hier zoekt hij naar de erste foutmelding in de HTML
//   // Hier maak ik een variabele aan
//   let eersteFout = this.querySelector(".foutmelding");

//   // Hier zegt hij, als
//   if (eersteFout) {
//     eersteFout.scrollIntoView({ behavior: "smooth", block: "center" });
//   }

//   // ! draait de waarde om,
//   if (!geldig) {
//     e.preventDefault();
//   }
// });
