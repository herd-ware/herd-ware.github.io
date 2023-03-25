---
title: "Parameters"
menuTitle: "Parameters"
weight: 3
---


## Description


## Chisel template

```scala 
// ******************************
//       AUBRAC CORE CONFIG 
// ******************************
object AubracConfigBase extends AubracConfig (
  // ------------------------------
  //            GLOBAL
  // ------------------------------
  debug = true,               // Boolean  -> Enable wires/registers generation for simulation debug.
  pcBoot = "00001000",        // String   -> Address of the first instruction.
  nAddrBit = 32,              // Int      -> Address size.
  nDataBit = 32,              // Int      -> Data size.

  // ------------------------------
  //            CHAMP
  // ------------------------------
  useChamp = true,            // Boolean  -> Use CHAMP ISA.
  nChampReg = 4,              // Int      -> Number of CHAMP registers.
  useChampExtMie = true,      // Boolean  -> Enable microarchitectural isolated execution (mie).
  useChampExtFr = false,      // Boolean  -> (Not used yet).
  useChampExtCst = true,      // Boolean  -> Enable constant flush.
  nChampTrapLvl = 2,          // Boolean  -> Number of trap levels.
  
  nPart = 2,                  // Int      -> Number of parts when multiple fields.
  nFieldFlushCycle = 10,      // Int      -> Number of flush cycles (for constant operation).

  // ------------------------------
  //           FRONT END
  // ------------------------------
  nFetchInstr = 1,            // Int      -> Number of simultaneously fetched instructions (power of 2).
  useIMemSeq = true,          // Boolean  ->
  useIf1Stage = false,        // Boolean  ->
  nFetchBufferDepth = 2,

  // ------------------------------
  //       NEXT-LINE PREDICTOR
  // ------------------------------
  useNlp = true,              // Boolean  ->
  nBtbLine = 8,
  nBhtSet = 8,
  nBhtSetEntry = 128,
  nBhtBit = 2,
  useRsbSpec = true,          // Boolean  ->
  nRsbDepth = 8,

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