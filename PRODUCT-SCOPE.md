# AraE - périmètre produit et vérité éditoriale

Ce document synthétise la revue du dépôt logiciel AraE. Il sert de source de
vérité pour le site public : les pages marketing peuvent simplifier le produit,
mais ne doivent ni le réduire à un outil pour MJ, ni annoncer une fonction qui
n'est pas réellement reliée dans l'application.

## Positionnement

AraE est un VTT desktop Windows pour toute la table. Il relie dans une même
application :

- la création et la gestion d'univers partagés ;
- les espaces, permissions et parcours distincts des MJ et des PJ ;
- la préparation de campagne et de sessions ;
- les personnages, leur fiche et leur progression ;
- la cartographie et la mémoire structurée de la campagne ;
- un tabletop 2D en direct avec scènes, tokens, chat, dés et curseurs ;
- des profils de système dédiés ou des outils génériques et manuels.

AraE n'est donc ni un simple journal de campagne, ni un cockpit réservé au MJ,
ni une carte en ligne isolée du reste de l'aventure.

## Capacités reliées dans l'application

### Univers partagés

- Création, liste, gestion et accès par invitation.
- Rôles propriétaire, assistant MJ et joueur.
- Canon privé côté MJ et projections publiées côté joueur.
- Membres, personnages, sessions, notes, snapshots et historique public selon
  les permissions choisies.
- Préparation et modification de sessions depuis l'univers.
- Soumission et revue de personnages pour les parcours qui le prévoient.

Sources principales dans le dépôt AraE :
`src/features/sharedUniverse/` et `electron/sharedUniverse*.ts`.

### Parcours joueur

- Hub des aventures en cours et reprise du dernier univers.
- Acceptation d'invitations et page de garde de l'aventure.
- Création, consultation et progression des personnages.
- Parcours spécialisés pour Dark Souls RPG et Ten Candles.
- Fiches et progression D20/D&D reliées au moteur de personnage.
- Accès à la session et au tabletop depuis l'aventure concernée.

Sources principales : `src/features/playerAdventures/` et
`src/features/characterProgression/`.

### Tabletop live

- Espaces distincts pour l'hôte MJ et les joueurs.
- Préparation de plusieurs scènes à partir d'images, vidéos ou médias locaux.
- Recadrage, échelle, grille, zoom et aperçu joueur détachable.
- Déroulé linéaire ou préparation open world avec scènes reliées par des portes.
- Placement de PJ et PNJ, équipes de combat et attribution des contrôles.
- Tokens déplacés en direct selon les droits de chaque participant.
- Chat de table, commandes de jets, dés 3D et curseurs distants.
- Invitations de session, transfert des médias depuis l'hôte et cache local côté
  participant.
- Socle de visibilité, lumières, murs et brouillard présent dans le runtime.

Sources principales : `src/pages/TabletopPage.tsx`,
`src/features/tabletop/` et `electron/tabletop*.ts`.

### Cartographie et mémoire de campagne

- Cartes organisées en arborescence avec navigation et changement rapide.
- Calibrage, grille, échelle, mesure et mini-carte.
- Marqueurs liés aux PNJ, quêtes, notes et lieux.
- Points d'intérêt, routes, zones, influences, dessin libre et brouillard.
- Chroniques, notes, PNJ, bestiaire, quêtes, lieux, factions, religions et
  peuples/races.
- Wiki global, snapshots d'entités et chronologie des découvertes.

Sources principales : `src/pages/MapPage.tsx`, `src/components/map/`,
`src/config/journalModules.ts` et `src/pages/wiki/`.

### Outils MJ

- Workbench séparée des univers pour préparer sans polluer une campagne.
- Simulation sur grille, placements, presets, journal et export de préparation.
- Catalogues éditables d'entités/statblocks, actions, objets, sorts, classes,
  sous-classes, races et sous-races.
- Terrain d'entraînement et ateliers de création spécialisés dans le tabletop.
- Moteur déterministe de règles D20 avec actions, effets, ressources,
  résistances, réactions, zones, visibilité et progression.

Sources principales : `src/pages/mj/`, `src/features/dm/` et `src/engine/`.

### Social et service central

- Compte, profil public, licence et activation via AraE Central Service.
- Recherche de joueurs, demandes d'ami, présence, blocage et suppression.
- Conversations privées et notifications en temps réel.
- Invitations d'univers et de sessions intégrées aux conversations.

Sources principales : `src/features/social/`, `src/features/profile/`,
`src/licensing/` et `electron/acs*.ts`.

## Systèmes de jeu

Les profils réellement spécialisés sont :

- D&D 5e 2014 et 2024 ;
- Dark Souls: The Roleplaying Game ;
- Ten Candles.

AraE expose aussi un mode personnalisé et de nombreux profils génériques. Ces
profils génériques donnent accès aux outils de campagne, aux fiches et au VTT,
mais ne constituent pas une automatisation complète du système concerné.

## Limites à communiquer clairement

- L'automatisation avancée des règles et du combat n'est pas universelle et
  continue d'être intégrée système par système.
- Certains parcours génériques ne disposent pas encore d'un wizard de création
  spécialisé.
- Les entrées marketplace, audio dédié et certaines connexions de catalogue au
  tabletop sont encore indiquées comme à venir dans l'application.
- AraE est actuellement communiqué comme une application Windows ; aucune
  disponibilité macOS ou Linux ne doit être promise.
- Les campagnes et médias sont local-first. Le site ne doit pas promettre une
  synchronisation cloud complète ni un relais réseau permanent.
- La traversée de tous les NAT et pare-feu n'est pas garantie ; selon le réseau,
  une configuration de connexion peut être nécessaire.

## Règles éditoriales

Formulations recommandées :

- « VTT desktop complet pour MJ et PJ » ;
- « une campagne continue, de la préparation à la table live » ;
- « profils dédiés et outils génériques/manuels » ;
- « automatisation avancée en cours d'intégration » ;
- « données et médias local-first ».

Formulations à éviter :

- « outil pour MJ » comme définition globale du produit ;
- « moteur entièrement automatisé pour tous les JDR » ;
- « tous les systèmes sont pris en charge nativement » ;
- « cloud intégral » ou « connexion garantie sur tous les réseaux » ;
- toute promesse de plateforme autre que Windows sans validation produit.
