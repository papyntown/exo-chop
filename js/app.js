// --- Éléments du DOM (déjà récupérés pour toi) ---
const charactersList = document.getElementById("characters-list");
const addCharacterBtn = document.getElementById("add-character-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalOverlay = document.getElementById("modal-overlay");
const addCharacterForm = document.getElementById("add-character-form");

// --- Affichage de la liste (déjà fait, pas besoin d'y toucher) ---
function renderCharacters(characters) {
    charactersList.innerHTML = "";

    characters.forEach((character) => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <div class="card-body">
        <h3>${character.name}</h3>
        <p>${character.description}</p>
      </div>
    `;
        charactersList.appendChild(card);
    });
}

// --- Ouverture / fermeture de la modal (déjà fait, pas besoin d'y toucher) ---
function openModal() {
    modalOverlay.classList.remove("hidden");
}

function closeModal() {
    modalOverlay.classList.add("hidden");
    addCharacterForm.reset();
}

addCharacterBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) closeModal();
});

// --- Chargement initial de la liste (déjà fait, pas besoin d'y toucher) ---
async function init() {
    const characters = await getAllCharacters();

    console.log({ characters });
    renderCharacters(characters);
}

init();

// ============================================================
// EXERCICE : à toi de jouer !
//
// Complète handleAddCharacterSubmit ci-dessous pour que le
// formulaire de la modal ajoute réellement un personnage à la liste.

//
// Étapes attendues :

//   1. Empêcher le rechargement de la page (le comportement par
//      défaut d'un formulaire quand on clique sur "submit").

//   2. Récupérer les valeurs saisies dans les champs du formulaire
//      (name, image, description). Astuce : chaque champ a un
//      attribut "id" dans le HTML (char-name, char-image,
//      char-description) que tu peux utiliser avec
//      document.getElementById(...).value

//   3. Construire un objet character avec ces valeurs, par exemple :
//      { name: "...", image: "...", description: "..." }

//   4. Appeler addCharacter(character). Cette fonction est déjà
//      fournie dans js/api.js : elle simule le backend et se charge
//      de sauvegarder le personnage, tu n'as rien d'autre à faire
//      pour la persistance.

//   5. Rafraîchir l'affichage pour voir le nouveau personnage
//      apparaître dans la liste (indice : tu as déjà getAllCharacters()
//      et renderCharacters() à ta disposition, un peu comme dans init()).

//   6. Fermer la modal (la fonction closeModal() existe déjà et
//      réinitialise aussi le formulaire).
// ============================================================
async function handleAddCharacterSubmit(event) {
    console.log({ event });
    // TODO : à compléter
}

addCharacterForm.addEventListener("submit", handleAddCharacterSubmit);
