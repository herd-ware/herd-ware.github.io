---
archetype: "chapter"
title: "Memory Bus for Security (MB4S)"
menuTitle: "MB4S"
weight: 1
---


## Résumé

MB4S (Memory Bus for Security) est le nom d'un protocole utilisé dans le projet HerdWare pour les bus mémoires.
De base, le fonctionnement et les signaux utilisés étaient similaires à ceux d'un bus Wishbone standard: deux interfaces *ready* / *valid* (fonctionnement en *poignée de main* ou *handshake* en anglais) pour les signaux de contrôle et pour les signaux de données.
Suite à différents travaux de recherche, le protocole a été modifié pour intégrer de nouvelles fonctionnalités, comme le supporte de contraintes de sécurité.

## Sommaire

{{% children sort="weight" depth=2 %}}