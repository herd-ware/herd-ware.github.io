---
archetype: "part"
title: "Aubrac"
menuTitle: "Aubrac"
weight: 1
---

{{% notice style="tip" title="Name origin" %}}
<img src="/img/aubrac-haute.jpg" alt="Aubrac Haute" style="width: 400px; display: block; margin: 0 auto;">
 
<div style="text-align: center; font-size: 10px;"> 
  <a href="https://www.salon-agriculture.com/A-voir-sur-le-salon/La-vache-egerie/Les-anciennes-vaches-egeries/Decouvrez-Haute-l-egerie-de-l-edition-2018">Image's source.</a>
</div>

*Aubrac* est le nom d'une race française de vaches originaire du [Plateau de l'Aubrac](https://www.parc-naturel-aubrac.fr/) dans le centre de la France. Elle est principalement élevée pour sa viande, mais aussi pour son lait utilisé pour le [fromage Laguiole](https://www.fromage-laguiole.fr/index.php).
{{% /notice %}}

Cette page et les suivantes décrivent le processeur Aubrac.
C'est un CPU avec exécution dans l'ordre d'une instruction par cycle.
Il est conçu autour d'un pipeline et de deux niveaux de mémoires caches.
Basé sur l'ISA RISC-V, il est développé en Chisel3 et se veut hautement configurable (taille des données, nombre d'étages, extensions du jeu d'instructions supportées *etc.*).

#### Vue globale

![Vue globale du processeur Aubrac](/fig/aubrac-top.png)

{{< caption 
  type="Figure" 
  x="1"
  main="Vue globale du processeur Aubrac."
  sub="Tous les différents étages possibles sont représentés, même si certains d'entre eux sont optionnels."
>}}

La Figure 1 rprésente le processeur Aubrac entier.
Celui-ci est composé de 8 parties.</br>
Le **Front-End** est responsable de la récupération des instructions en mémoire.
Le **NLP** est responsable de la prédiction des aléas du flot de contrôle.
Le **Back-End** est responsable du décodage et de l'exécution des instructions.
L'unité de gestion des champs matériels (**HFU**) est une unité d'exécution dédiés à la contextualisation ([CHAMP ISA](/doc/isa/champ)).
Le module des **I/O** est utilisé pour les mécanismes addressables en mémoire spécifiques au processeur (*e.g.* les *timers* privilégiés).
Enfin, **L1I**, **L1D** et **L2** sont respectivement le cache d'instruction de niveau 1, le cache de données de niveau 1 et le cache unifié de niveau 2.

#### Support du jeu d'instructions

Le processeur Aubrac est basé sur l'ISA RISC-V.
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
  type="Table" 
  x="1"
  main="Résumé des différentes extensions RISC-V supportées par le processeur Aubrac."
  sub="Certaines doivent encore être testées plus en profondeur."
>}}

Comme décrit dans la Table 1, de multiples extensions sont actuellemnt implémentées dans Aubrac.
La plupart d'entre elles sont optionnelles: les différents mécanismes matériels dédiés peuvent être totalement supprimés lors de la génération du Verilog.

{{% notice style="warning" %}}
Si les versions 32 et 64 bits sont implémentées, seule la version 32 bits est actuellement utilisée et testée.
Un travail supplémentaire est nécessaire pour vérifier les instructions spécifiques à la version 64 bits, comme celles dédiées à la manipulation de mots de 32 bits.
{{% /notice %}}

#### Sommaire

{{% children sort="weight" depth=2 %}}
