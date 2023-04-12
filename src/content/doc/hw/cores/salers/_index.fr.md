---
archetype: "part"
title: "Salers"
menuTitle: "Salers"
weight: 2
---

{{% notice style="tip" title="Origine du nom" %}}
<img src="/img/salers-ovalie.png" alt="Salers Ovalie" style="width: 400px; display: block; margin: 0 auto;">
 
<div style="text-align: center; font-size: 10px;"> 
  <a href="https://www.salon-agriculture.com/A-voir-sur-le-salon/La-vache-egerie/Decouvrez-la-vache-egerie-2023/OVALIE">Source de l'image.</a>
</div>

*Salers* est le nom d'une race française de vaches originaire du [Cantal](https://www.cantal.fr/) dans le centre de la France. Elle est notamment élevée pour son lait utilisé pour le [fromage Salers](https://www.aop-salers.com/).
{{% /notice %}}

Cette page et les suivantes décrivent le processeur Salers.
Il permet l'exécution dans l'ordre de plusieurs instructions par cycle.
Il est conçu autour d'un pipeline et de deux niveaux de mémoires caches.
Basé sur l'ISA RISC-V, il est développé en Chisel3 et se veut hautement configurable (taille des données, nombre d'étages, extensions du jeu d'instructions supportées *etc.*).

{{% notice style="warning" %}}
Une version précédente de Salers a servi de base pour certains travaux sur l'isolation microarchitecturale [[Esco2021]](https://hal.science/hal-03351957).
Elle supportait notamment plusieurs fils d'exécutions simultanés (*multithreading*).
En théorie, si la partie **Back-End** permet toujours le support de plusieurs *harts*, la version globale actuelle a été simplifiée et ne permet plus qu'un fil d'exécution.
{{% /notice %}}

## Vue globale

## Support du jeu d'instructions

| Extension       |  Version  |   Implementée ?    |      Testée ?      |  Optionnelle ?     | Dépendances    |
|:----------------|:----------|:-------------------|:-------------------|:-------------------|:---------------|
| **M**           | 2.0       | {{% icon check %}} | {{% icon check %}} | {{% icon check %}} |                |
| **A**           | 2.1       | {{% icon check %}} | {{% icon xmark %}} | {{% icon check %}} |                |
| **B**           | 1.0.0     | {{% icon check %}} | {{% icon xmark %}} | {{% icon check %}} |                |
| **Zicsr**       |           | {{% icon check %}} | {{% icon xmark %}} | {{% icon xmark %}} |                |
| **Zicntr**      |           | {{% icon check %}} | {{% icon xmark %}} | {{% icon xmark %}} |                |
| **Zifencei**    | 2.0       | {{% icon check %}} | {{% icon xmark %}} | {{% icon check %}} |                |

{{< caption 
  type="Tableau" 
  x="1"
  main="Résumé des différentes extensions RISC-V supportées par le processeur Salers."
  sub="Certaines doivent encore être testées plus en profondeur."
>}}


{{% notice style="warning" %}}
Si les versions 32 et 64 bits sont implémentées, seule la version 32 bits est actuellement utilisée et testée.
Un travail supplémentaire est nécessaire pour vérifier les instructions spécifiques à la version 64 bits, comme celles dédiées à la manipulation de mots de 32 bits.
{{% /notice %}}

## Sommaire

{{% children sort="weight" depth=2 %}}