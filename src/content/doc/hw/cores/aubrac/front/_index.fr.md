---
archetype: "chapter"
title: "Front-end"
menuTitle: "Front-end"
weight: 1
---

## Sommaire

{{% children sort="weight" depth=2 %}}

## Vue globale

Le **Front-End** est la partie matérielle responsable de récupérer les instructions en mémoire.
Directement associé au [NLP](/doc/hw/cores/aubrac/nlp/) pour la prédiction de branchement, il calcule chaque cycle la valeur du compteur ordinal (PC pour *program counter* en anglais).
Ensuite, il l'utilise pour charger les instructions correspondantes depuis la mémoire.

{{< fig 
  fig="/fig/aubrac-front.png"
  alt="Figure" 
  width=400px   
  x="1"
  caption="Vue globale du Front-End."
  subcaption=""
>}}

La version actuelle du Front-End est composée de cinq étages configurables:
1. L'étage PC calcule l'adresse de la prochaine instruction à charger en mémoire.
2. Les étages IF{0-2} gèrent l'interface mémoire pour la récupération des instructions.
3. L'étage IF3 est utilisé pour le pré-décodage avant d'envoyer les instructions dans le **fetch buffer**.

L'ensemble du code est disponible dans un répertoire du projet Aubrac sur [GitHub](https://github.com/herd-ware/hw-core-aubrac/tree/main/src/main/scala/front).
   