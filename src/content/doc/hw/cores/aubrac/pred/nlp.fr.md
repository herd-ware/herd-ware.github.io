---
title: "Prédicteur de prochaine ligne (NLP)"
menuTitle: "NLP"
weight: 1
---

## Vue globale

{{< fig 
  fig="/fig/nlp.png"
  alt="Table" 
  width=400px   
  x="1"
  caption="Vue globale du NLP."
  subcaption="À chaque cycle, le Front-End damande au NLP les informations sur le prochain PC. Si celui-ci correspond à des informations internes comme un saut ou un branchement pris, alors le NLP spécule sur le PC suivant."
>}}

## Composants internes

En interne, le NLP est basé sur plusieurs composants.
Chacun d'entre eux est spécifique à un type d'aléa: les sauts, les branchements conditionnels ou les appels de fonction.

### Branch Target buffer (BTB)

{{< fig 
  fig="/fig/btb.png"
  alt="Table" 
  width=200px   
  x="1"
  caption="Fonctionnement du BTB"
  subcaption="Quand un saut ou un branchement est détecté, ses informations sont enregistrées dans le BTB. Plus tard, avant de récupérer l'instruction correspondant à un PC, le BTB est lu pour anticiper des changements du flot d'exécution."
>}}

Pour chaque saut ou branchement, le BTB enregistre plusieurs informations:
- l'information est-elle **valide** ?
- l'**adresse de l'instruction**.
- l'**adresse de destination**.
- l'instruction est-elle un **saut** ?
- l'instruction est-elle un **appel de fonction** ?
- l'instruction est-elle un **retour de fonction** ?

### Branch History Table (BHT)

{{< fig 
  fig="/fig/bht-fsm.png"
  alt="Table" 
  width=200px   
  x="2"
  caption="Principe de la machine d'états finis du BHT"
  subcaption="Chaque nouveau branchement met à jour un compteur qui indique si les derniers branchements croisés étaient majoritairement pris ou non."
>}}

{{< fig 
  fig="/fig/bht-top.png"
  alt="Table" 
  width=250px   
  x="3"
  caption="Description du fonctionnement du BHT"
  subcaption="Les bits de poids faible de l'adresse de chaque branchement pointe vers un compteur particulier. Selon la valeur du bit de poids fort du compteur, le BHT peut ensuite indiquer si le branchement doit être pris ou non."
>}}

### Return Stack Buffer (RSB)

{{< fig 
  fig="/fig/rsb.png"
  alt="Table" 
  width=250px   
  x="4"
  caption="Description du fonctionnement d'un BHT."
  subcaption="Quand un appel est détecté, le PC de l'instruction suivante (basiquement PC+4) est sauvegardé au sommet du RSB, et le pointeur de pile est incrémenté. Quand un retour est détecté, la dernière valeur sauvegardée dans le RSB est récupérée et le pointeur de pile décrémenté."
>}}

## Mise à jour des informations