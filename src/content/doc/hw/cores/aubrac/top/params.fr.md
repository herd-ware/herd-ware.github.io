---
title: "Paramètres"
menuTitle: "Paramètres"
weight: 3
---


## Exemple Chisel3

```scala 
// ******************************
//       AUBRAC CORE CONFIG 
// ******************************
object AubracConfigBase extends AubracConfig (
  // ------------------------------
  //            GLOBAL
  // ------------------------------
  debug = true,               // Boolean  -> Active les signaux/registres de débuggage en simulation.
  pcBoot = "00001000",        // String   -> Adresse de démarrage
  nAddrBit = 32,              // Int      -> Taille d'une addresse (en bit)
  nDataBit = 32,              // Int      -> Taille d'une donnée (en bit)

  // ------------------------------
  //            CHAMP
  // ------------------------------
  useChamp = true,            // Boolean  -> Ative l'utilisation de l'ISA CHAMP.
  nChampReg = 4,              // Int      -> Nombre de registres CHAMP.
  useChampExtMie = true,      // Boolean  -> Active l'isolation microarchitecturale des exécutions (mie)
  useChampExtFr = false,      // Boolean  -> (Non-utilisé).
  useChampExtCst = true,      // Boolean  -> Active les flushs en temps constant.
  nChampTrapLvl = 2,          // Boolean  -> Niveaux de traps
  
  nPart = 2,                  // Int      -> Nombre de parties matérielles.
  nFieldFlushCycle = 10,      // Int      -> Nombre de cycles par flush (pour temps constant).

  // ------------------------------
  //           FRONT END
  // ------------------------------
  nFetchInstr = 1,            // Int      -> Nombres d'instructions récupérées simultanément
  useIMemSeq = true,          // Boolean  -> Accès mémoire séquentiel
  useIf1Stage = false,        // Boolean  -> Active le stage IF1
  nFetchBufferDepth = 2,      // Int      -> Taille du fetch buffer

  // ------------------------------
  //       NEXT-LINE PREDICTOR
  // ------------------------------
  useNlp = true,              // Boolean  -> Utilise le NLP
  nBtbLine = 8,               // Int      -> Taille du BTB
  nBhtSet = 8,                // Int      -> Nombre d'ensembles du BHT
  nBhtSetEntry = 128,         // Int      -> Nombre d'entrées par ensemble du BHT
  nBhtBit = 2,                // Int      -> Nombre de bits par compteur du BHT
  useRsbSpec = true,          // Boolean  -> Active ls RSB spéculatif
  nRsbDepth = 8,              // Int      -> Taille du RSB

  // ------------------------------
  //           BACK END
  // ------------------------------
  useExtM = true,             // Boolean  ->
  useExtA = false,            // Boolean  ->
  useExtB = false,            // Boolean  ->
  useExtZifencei = true,      // Boolean  ->
  useExtZicbo = true,         // Boolean  ->
  nExStage = 1,
  useMemStage = true,         // Boolean  ->
  useBranchReg = true,        // Boolean  ->

  // ------------------------------
  //              I/Os
  // ------------------------------
  nIOAddrBase = "00100000",
  nScratch = 2,
  nCTimer = 2,
  isHpmAct = Array("ALL"),
  hasHpmMap = Array(),

  nUnCacheBase = "70000000",  // Int      ->
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