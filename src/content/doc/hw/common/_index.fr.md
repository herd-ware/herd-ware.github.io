---
archetype: "part"
title: "Modules et interfaces communs"
menuTitle: "Common"
weight: 1
---

## Sommaire

{{% children sort="weight" depth=2 %}}

## Résumé

Le projet [common](https://github.com/herd-ware/hw-common) définit des éléments matériels de base et communs à d'autres projets.
Il se sépare en différentes catégories:
- **bus**: structures de certains bus et signaux communs,
- **core**: bus, signaux et modules utilisés par plusieurs implémentations de processeurs,
- **field**: bus, signaux, modules et paramètres de configuration pour la mise en place des champs matériels,
- **gen**: bus, signaux, modules et paramètres de configuration pour la mise en place de structures génériques (registres, FIFO *etc.*),
- **isa**: bus, signaux et modules utilisés pour les jeux d'instructions,
- **mem**: bus, signaux et modules utilisés pour les implémentations de mémoire,
- **tools**: divers modules et fonctions.