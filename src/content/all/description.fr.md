---
archetype: "page"
title: "Description"
date: 2023-02-18T10:52:46+01:00
weight: 1
---

## Informations globales

## Langage de description matérielle (HDL)

Les langages de description matérielle sontutilisés pour décrire le fonctionnement des circuits électroniques numériques.
Pour la conception des différents composants matériels, HerdWare se base principalement sur le langage [Chisel3](https://www.chisel-lang.org/).

Chisel3 est un langage libre et ouvert initialement développé à l'Université de Berkeley et basé sur le langage Scala.
Il permet la description du fonctionnement de circuits numériques, mais aussi intègre des fonctionnalités pour la génération matérielle.
Le Chisel3 peut être compilé afin de générer du Verilog synthétisable.
Étant basé sur le langage Scala, le Chisel3 supporte également des fonctionnalités de langage haut-niveau (programmation orientée objet, héritage *etc.*).

Dans HerdWare, la plupart des composants matériels (processeurs, périphériques *etc.*) sont conçus en utilisant du Chisel3.
Ils sont principalement organisés en de nombreux modules réutilisables.
Comme décrit dans les prochaines pages, des objets sont ensuite instanciés dans le code pour permettre la génération du Verilog de chaque composant.
Finalement, les différents composants Verilog générés sont parfaitement compatibles avec les outils de conceptions standards (Vivado, Verilator et tous ceux supportant le Verilog).


## Organisation

- [HerdWare](/fr/all): Cette partie donne des informations globales sur le projet.
Différentes pages sont disponibles pour l'installation des outils, la simulation des composants matériels et leur configuration.
- [Documentation](/doc): Cette partie décrit les différents développements du projet: matériel, logiciel mais aussi des modifications du jeu d'instructions.
Le code de la plupart d'entre eux est directement disponible sur [GitHub](https://github.com/herd-ware).
- [Références](/fr/refs): Cette page liste les différetes références (articles, sites) utilisées sur le site.
- [Glossaire](/fr/gls): Cette page liste les différents acronymes et termes techniques utilisés sur le site.