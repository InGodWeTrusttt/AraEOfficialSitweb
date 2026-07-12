# AraEOfficialSitweb

Site vitrine statique d’AraE, le VTT desktop pour maîtres du jeu et joueurs.

Le contenu public présente les fonctions réellement reliées dans l’application :
univers partagés, parcours MJ/PJ, personnages, préparation de sessions, scènes
multimédias, cartes, grilles, tokens contrôlés, chat, dés et invitations.

La source de vérité éditoriale issue de la revue du logiciel est documentée dans
[`PRODUCT-SCOPE.md`](PRODUCT-SCOPE.md). Toute évolution importante du produit ou
du site doit conserver cette distinction entre fonctions disponibles, profils
génériques et automatisations encore en cours d’intégration.

## Aperçu local

```powershell
python -m http.server 8080
```

Ouvrir ensuite `http://localhost:8080/`.

## Vérifications

```powershell
node --check js/site-config.js
node --check js/main.js
```

Le site n’utilise ni build ni dépendance JavaScript. Les URL commerciales,
libellés, coordonnées et captures sont centralisés dans `js/site-config.js`.
Les informations légales marquées « À compléter » doivent être renseignées et
validées avant toute mise en ligne commerciale.
