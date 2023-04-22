---
archetype: "page"
title: "Protocole"
menuTitle: "Protocole"
weight: 1
---


## Principes de base


{{< fig 
  fig="/fig/mb4s/base.png"
  alt="Protocole de base" 
  width=600px   
  x="1"
  caption="Protococole MB4S de base"
  subcaption="Les préfixes i_* et o_* indiquent le sens des signaux (respectivement in et out) depuis le contrôleur maître."
>}}

## Champ matériel

## Opération mémoire atomique (AMO)

## Version complète

| Nom                    | Optionnel          | Taille (en bits)  | Sens  | Description |
|:-----------------------|:-------------------|:------------------|:------|:------------|
| `req.ready`            |                    | `1`               | IN    | Prêt à recevoir (requête). |
| `req.valid`            |                    | `1`               | OUT   | Prêt à envoyer (requête). |
| `req.field`            | {{% icon check %}} | `X`               | OUT   | Champ matériel associé (requête) |
| `req.ctrl.hart`        |                    | `X`               | OUT   | Numéro du hart. |
| `req.ctrl.op`          |                    | `1`-`3`           | OUT   | Type d'opération. |
| `req.ctrl.amo`         | {{% icon check %}} | `4`               | OUT   | Type d'opération atomique. |
| `req.ctrl.size`        |                    | `3`               | OUT   | Taille de la donnée. |
| `req.ctrl.addr`        |                    | `X`               | OUT   | Adresse mémoire. |
| `write.ready`          |                    | `1`               | IN    | Prêt à recevoir (écriture). |
| `write.valid`          |                    | `1`               | OUT   | Prêt à envoyer (écriture). |
| `write.field`          | {{% icon check %}} | `X`               | OUT   | Champ matériel associé (écriture) |
| `write.data`           |                    | `X`               | OUT   | Donnée (écriture). |
| `read.ready`           |                    | `1`               | OUT   | Prêt à recevoir (lecture). |
| `read.valid`           |                    | `1`               | IN    | Prêt à envoyer (lecture). |
| `read.field`           | {{% icon check %}} | `X`               | IN    | Champ matériel associé (lecture) |
| `read.data`            |                    | `X`               | IN    | Donnée (lecture). |


