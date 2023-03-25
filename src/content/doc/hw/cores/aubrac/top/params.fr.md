---
title: "Paramètres"
menuTitle: "Paramètres"
weight: 3
---


## Description



| **Nom**        | **Type** | **Valeurs** | **Description** |
|:---------------|:---------|:------------|:----------------|
| **debug**      | Boolean  | *true* / *false* | Active/désactive la génération de signaux et registres supplémentaires pour le debug en simulation. simulation. |
| **pcBoot**     | String   | "hhhhhhhh" | Adresse de la première instruction exécutée |
| **nAddrBit**   | Int      | 32 | Taille des addresses. |
| **nDataBit**   | Int      | 32 / 64 | Taille des données. |
| **nFetchInstr** | Int | 2^N | Nombre d'instructions récupérées simultanément en mémoire. |
| **useIMemSeq** | Boolean | *true* / *false* | Active/désactive les accès séquentiels vers la mémoire d'instructions (*e.g.* les opérations de *flush* sont considérées qu'au cycle suivant). |
| **useIf1Stage** | Boolean | *true* / *false* | Active/désactive l'étage IF1. |
| **nFetchBufferDepth** | Int | N | Taille du buffer de sortie du Front-End. |

{{< caption 
  type="Table" 
  x="1"
  main="Récapitulatif des différents paramètres globaux du processeur Aubrac."
  sub=""
>}}

## Exemple Chisel3

```scala 
// ******************************
//       AUBRAC CORE CONFIG 
// ******************************
object AubracConfigBase extends AubracConfig (
  // ------------------------------
  //            GLOBAL
  // ------------------------------
  debug = true,         
  pcBoot = "00001000",
  nAddrBit = 32,
  nDataBit = 32, 

  // ------------------------------
  //            CHAMP
  // ------------------------------
  useChamp = true,
  nChampReg = 4,
  useChampExtMie = true,
  useChampExtFr = false,
  useChampExtCst = true,
  nChampTrapLvl = 2,
  
  nPart = 2,
  nFieldFlushCycle = 10,

  // ------------------------------
  //           FRONT END
  // ------------------------------
  nFetchInstr = 1,
  useIMemSeq = true,
  useIf1Stage = false,
  nFetchBufferDepth = 2,

  // ------------------------------
  //       NEXT-LINE PREDICTOR
  // ------------------------------
  useNlp = true,
  nBtbLine = 8,
  nBhtSet = 8,
  nBhtSetEntry = 128,
  nBhtBit = 2,
  useRsbSpec = true,
  nRsbDepth = 8,

  // ------------------------------
  //           BACK END
  // ------------------------------
  useExtM = true,
  useExtA = false,
  useExtB = false,
  useExtZifencei = true,
  useExtZicbo = true,
  nExStage = 1,
  useMemStage = true,
  useBranchReg = true,

  // ------------------------------
  //              I/Os
  // ------------------------------
  nIOAddrBase = "00100000",
  nScratch = 2,
  nCTimer = 2,
  isHpmAct = Array("ALL"),
  hasHpmMap = Array(),

  nUnCacheBase = "70000000",
  nUnCacheByte = "01000000",

  // ------------------------------
  //           L1I CACHE
  // ------------------------------
  useL1I = true,
  nL1INextDataByte = 8,
  nL1INextLatency = 1,

  useL1IPftch = false,
  nL1IPftchEntry = 4,
  nL1IPftchEntryAcc = 1,
  nL1IPftchMemRead = 1,
  nL1IPftchMemWrite = 1,

  nL1IMem = 1,
  nL1IMemReadPort = 2,
  nL1IMemWritePort = 1,

  slctL1IPolicy = "BitPLRU",
  nL1ISet = 4,
  nL1ILine = 4,
  nL1IData = 4,

  // ------------------------------
  //           L1D CACHE
  // ------------------------------
  useL1D = true,
  nL1DNextDataByte = 8,
  nL1DNextLatency = 1,

  useL1DPftch = false,
  nL1DPftchEntry = 4,
  nL1DPftchEntryAcc = 1,
  nL1DPftchMemRead = 1,
  nL1DPftchMemWrite = 1,

  nL1DMem = 1,
  nL1DMemReadPort = 2,
  nL1DMemWritePort = 1,

  slctL1DPolicy = "BitPLRU",
  nL1DSet = 4,
  nL1DLine = 4,
  nL1DData = 4,

  // ------------------------------
  //           L2 CACHE
  // ------------------------------
  useL2 = true,
  nL2NextDataByte = 8,
  useL2ReqReg = true,
  useL2AccReg = false,
  useL2AckReg = false,
  nL2WriteFifoDepth = 2,
  nL2NextFifoDepth = 2,
  nL2NextLatency = 1,

  useL2Pftch = false,
  nL2PftchEntry = 4,
  nL2PftchEntryAcc = 1,
  nL2PftchMemRead = 1,
  nL2PftchMemWrite = 1,

  nL2Mem = 2,
  nL2MemReadPort = 2,
  nL2MemWritePort = 1,

  slctL2Policy = "BitPLRU",
  nL2Set = 4,
  nL2Line = 4,
  nL2Data = 4
)
```