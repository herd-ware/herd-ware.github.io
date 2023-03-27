---
title: "Paramètres"
menuTitle: "Paramètres"
weight: 10
---


## Vue globale

## Modèle Chisel

```scala
object FrontConfigBase extends FrontConfig (
  debug = true,           // Boolean  -> Enable wires/registers generation for simulation debug.
  pcBoot = "00001000",    // String   -> Adresse de démarrage
  nHart = 1,              // Int      -> Nombre de harts
  
  useField = false,       // Int      -> Active l'utilisation des champs matériels
  nField = 1,             // Int      -> Nombre de champs matériels
  nPart = 1,              // Int      -> Nombre de parties matérielless

  nAddrBit = 32,          // Int      -> Taille d'une adresse (en bit)
  nInstrByte = 4,         // Int      -> Taille maximale d'une instruction (en octet)
  nFetchInstr = 2,        // Int      -> Nombres d'instructions récupérées simultanément

  useIMemSeq = false,     // Boolean  -> Accès mémoire séquentiel
  useIf1Stage = true,     // Boolean  -> Active le stage IF1
  useIf2Stage = true,     // Boolean  -> Active le stage IF2
  nFetchBufferDepth = 4,  // Int      -> Taille du fetch buffer
  useNlp = true,          // Boolean  -> Utilise le NLP
  useFastJal = true,      // Boolean  -> Active pré-décodage du jal

  nBackPort = 1           // Int      -> Nombres d'instructions lues simultanément
)
```