---
archetype: "page"
title: "Étage PC"
menuTitle: "PC"
weight: 1
---


## Fonctionnement
Chaque cycle, l'étage PC est responsable de calculer l'adresse de la prochaine instruction qui sera récupérée en mémoire (PC).
Pour cela, un regstre interne à l'étage est incrémenté cycle par cycle pour parcourir les instructions les unes à la suite des autres.

Cependant, l'ISA RISC-V intègre des instructions de gestion du flot de contrôle comme des saut (`jal` et `jalr`) ou branchements conditionnels  (`beq`, `bne`, `bge`, `bgeu`, `blt` et `bltu`).
Ces instructions entraînent une non-linéarité des programmes.
Ainsi, pour tenter de récupérer les bonnes instructions à chaque cycle, un prédicteur de branchement est nécessaire pour tenter de les anticiper.
L'étage PC est pour cela connecté au [NLP](/doc/hw/cores/aubrac/nlp/).

Cependant, il arrive que certaines prédictions ne soient pas correctes.
De plus, certaines instructions ne sont parfois pas prédictibles.
Différentes unités du processeur peuvent alors demander à l'étage PC de rediriger le flot d'exécution:
- L'unité BRU en cas de mauvaise prédiction d'un branchement ou d'un saut,
- L'unité HFU en cas de changement de champ matériel (voir [CHAMP ISA](/doc/isa/champ)),
- L'étage IF3 en cas de pré-décodage pour l'anticipation des sauts directs (`jal`).


