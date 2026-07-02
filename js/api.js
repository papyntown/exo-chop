/*
 * Ce fichier simule un "backend". Il n'y a rien à modifier ici.
 *
 * On ne peut pas écrire dans un vrai fichier JSON depuis le navigateur,
 * donc on simule la persistance avec le localStorage : les personnages
 * ajoutés survivent à un rechargement de la page, exactement comme si
 * un vrai serveur les avait enregistrés en base de données.
 *
 * Ce que tu dois retenir : addCharacter() s'occupe de tout, tu n'as
 * jamais besoin de toucher au localStorage toi-même.
 */

const STORAGE_KEY = "db-added-characters";

async function fetchInitialCharacters() {
  const response = await fetch("data/characters.json");
  return response.json();
}

function getAddedCharacters() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveAddedCharacters(characters) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

// Renvoie la liste complète : les personnages de base + ceux ajoutés.
async function getAllCharacters() {
  const initial = await fetchInitialCharacters();
  const added = getAddedCharacters();
  return [...initial, ...added];
}

// Ajoute un personnage au "backend" (localStorage) et le renvoie
// (avec un id généré). C'est la seule fonction à appeler pour ajouter
// un personnage : elle gère la persistance à ta place.
function addCharacter(character) {
  const added = getAddedCharacters();

  const newCharacter = {
    id: Date.now(),
    name: character.name,
    image: character.image || "https://placehold.co/300x300/94a3b8/ffffff?text=%3F",
    description: character.description || "",
  };

  added.push(newCharacter);
  saveAddedCharacters(added);

  return newCharacter;
}
