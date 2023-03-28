---
archetype: "chapter"
title: "Prédiction de branchement"
menuTitle: "Prédiction de branchement"
weight: 2
---


## Sommaire

{{% children sort="weight" depth=2 %}}

## Principes

Pour anticiper les aléas du flot de contrôle, le processeur Aubrac met en place des mécanismes de prédiction de branchement.
Le principe est de sauvegarder des informations au cours de l'exécution afin d'anticiper les futurs branchements ou sauts.

Différentes implémentations de prédicteurs sont possibles.
Elles varient généralement par leur complexité et leur efficacité.

## Implémentations

Actuellement, le processeur Aubrac dispose comme prédicteur de branchement:
- d'un [**NLP**](/doc/hw/cores/aubrac/pred/nlp/) qui est la version la plus simpliste d'un prédicteur de branchement.

