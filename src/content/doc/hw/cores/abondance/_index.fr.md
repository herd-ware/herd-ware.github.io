---
archetype: "part"
title: "Abondance"
menuTitle: "Abondance"
weight: 3
---

{{% notice style="tip" title="Origine du nom" %}}
<img src="/img/abondance-neige.jpg" alt="Abondance Neige" style="width: 400px; display: block; margin: 0 auto;">
 
<div style="text-align: center; font-size: 10px;"> 
  <a href="https://www.salon-agriculture.com/A-voir-sur-le-salon/La-vache-egerie/Les-anciennes-vaches-egeries/Decouvrez-Neige-l-egerie-de-l-edition-2022">Source de l'image.</a>
</div>

*Abondance* est le nom d'une race française de vaches originaire de [Haute-Savoie](https://www.hautesavoie.fr/) dans le sud-est de la France. Elle est principalement élevée pour son lait utilisée dans différents fromages comme le [Reblochon](https://www.reblochon.fr/en/), l'[Abondance](https://www.fromageabondance.fr/en) et bien d'autres.
{{% /notice %}}

Cette page et les suivantes décrivent le processeur Abondance.
Il permet exécution dans le désordre de plusieurs instructions par cycle.
Il est conçu autour d'un pipeline et plusieurs unités, ainsi que deux niveaux de mémoires caches.
Basé sur l'ISA RISC-V, il est développé en Chisel3 et se veut hautement configurable (taille des données, nombre d'étages, extensions du jeu d'instructions supportées *etc.*).

## Vue globale

![Overview of the Abondance core.](/fig/abondance-top.png)

{{< caption 
  type="Figure" 
  x="1"
  main="Vue globale du processeur Abondance."
  sub="Tous les différents étages et unités possibles sont représentés, même si certains d'entre eux sont optionnels."
>}}

La Figure 1 représente le processeur Abondance dans son ensemble.
Is est composé de 10 parties.<br/>
Le **Front-End** est responsable de la récupération des instructions en mémoire.
Le **NLP** est responsable de la prédiction des aléas du flot de contrôle.
Le **Back-End** est responsable du décodage et de la gestion des exécutions.
Il intègre aussi les mécanismes de renommage pour les registres d'entiers utilisés par plusieurs unités.
L'unité **INT** est responsable de l'exécution des opérations sur les entiers.
L'unité **LSU** est responsable de l'exécution des opérations mémoires sur les entiers.
L'unité de gestion des champs matériels (**HFU**) est une unité d'exécution dédiée à la contextualisation ([CHAMP ISA](/doc/isa/champ)).
Le module des **I/O** est utilisé pour les mécanismes addressables en mémoire spécifiques au processeur (*e.g.* les *timers* privilégiés).
Enfin, **L1I**, **L1D** et **L2** sont respectivement le cache d'instruction de niveau 1, le cache de données de niveau 1 et le cache unifié de niveau 2.


## Support du jeu d'instructions

Le processeur Abondance est basé sur l'ISA RISC-V.
Il supporte actuellement les bases 32 et 64 bits du jeu d'instructions.

| Extension       |  Version  |   Implementée ?    |      Testée ?      |  Optionnelle ?     | Dépendances    |
|:----------------|:----------|:-------------------|:-------------------|:-------------------|:---------------|
| **M**           | 2.0       | {{% icon check %}} | {{% icon check %}} | {{% icon check %}} |                |
| **A**           | 2.1       | {{% icon check %}} | {{% icon check %}} | {{% icon check %}} |                |
| **B**           | 1.0.0     | {{% icon check %}} | {{% icon xmark %}} | {{% icon check %}} |                |
| **Zicsr**       |           | {{% icon check %}} | {{% icon xmark %}} | {{% icon xmark %}} |                |
| **Zicntr**      |           | {{% icon check %}} | {{% icon xmark %}} | {{% icon xmark %}} |                |
| **Zifencei**    | 2.0       | {{% icon check %}} | {{% icon xmark %}} | {{% icon check %}} |                |

{{< caption 
  type="Tableau" 
  x="1"
  main="Résumé des différentes extensions RISC-V supportées par le processeur Abondance."
  sub="Certaines doivent encore être testées plus en profondeur."
>}}

Comme décrit dans la Tableau 1, de multiples extensions sont actuellemnt implémentées dans Abondance.
La plupart d'entre elles sont optionnelles: les différents mécanismes matériels dédiés peuvent être totalement supprimés lors de la génération du Verilog.

{{% notice style="warning" %}}
Si les versions 32 et 64 bits sont implémentées, seule la version 32 bits est actuellement utilisée et testée.
Un travail supplémentaire est nécessaire pour vérifier les instructions spécifiques à la version 64 bits, comme celles dédiées à la manipulation de mots de 32 bits.
{{% /notice %}}

## Table of contents

{{% children sort="weight" depth=2 %}}