# Exercice - Dragon Ball Characters

Projet HTML / CSS / JS vanilla (pas de framework) qui affiche une liste de
personnages Dragon Ball chargée depuis un JSON, avec un bouton **+** qui
ouvre une modal pour en ajouter un nouveau.

## Structure

```
index.html            structure de la page + de la modal (déjà fait)
css/style.css          styles (déjà fait)
data/characters.json   les 10 personnages de départ
js/api.js              "backend" simulé (déjà fait, ne pas modifier)
js/app.js              logique de l'app (à compléter, voir plus bas)
```

## Lancer le projet

Ouvre simplement `index.html` dans le navigateur (ou utilise une extension
type "Live Server" si tu en as une). Le fetch de `data/characters.json`
fonctionne aussi en ouvrant le fichier directement dans la plupart des
navigateurs modernes ; si tu as une erreur de type CORS/fetch, lance un
petit serveur local, par ex. avec l'extension VS Code "Live Server", ou :

```
npx serve .
```

## Ce qui est déjà fait

- L'affichage de la liste des personnages.
- L'ouverture / fermeture de la modal (bouton **+**, croix, clic en dehors).
- Le "backend" simulé (`js/api.js`) : une fonction `addCharacter(character)`
  qui enregistre le personnage (via `localStorage`, pour qu'il survive à un
  rechargement de page) et une fonction `getAllCharacters()` qui renvoie la
  liste complète. Tu n'as pas à comprendre ni modifier ce fichier, considère
  le comme une vraie API.

## Ce qu'il te reste à faire

Dans `js/app.js`, tout en bas, la fonction `handleAddCharacterSubmit` est
vide. C'est l'exercice : elle est appelée quand on soumet le formulaire de
la modal, et c'est à toi de coder la logique qui va :

1. Empêcher le rechargement de la page.
2. Récupérer les valeurs saisies dans le formulaire.
3. Construire un objet personnage.
4. L'envoyer au "backend" via `addCharacter(...)`.
5. Rafraîchir l'affichage de la liste.
6. Fermer la modal.

Toutes les instructions détaillées sont en commentaire juste au-dessus de la
fonction dans `js/app.js`.
