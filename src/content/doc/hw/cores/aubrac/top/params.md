---
title: "Parameters"
menuTitle: "Parameters"
weight: 3
---


## Description



| **Name**       | **Type** | **Values** | **Description** |
|:---------------|:---------|:-----------|:----------------|
| **debug**      | Boolean  | *true* / *false* | Enable / disable the generation of signals and registers for debug during simulation. |
| **pcBoot**     | String   | "hhhhhhhh" | Address of the first executed instruction. |
| **nAddrBit**   | Int      | 32 | Address size. |
| **nDataBit**   | Int      | 32 / 64 | Data size. |
| **nFetchInstr** | Int | 2^N | Number of instructions simultaneously fetched. |
| **useIMemSeq** | Boolean | *true* / *false* | Enable / disable sequential access to the instruction memory (*e.g.* flush is considered only in the next cycle). |
| **useIf1Stage** | Boolean | *true* / *false* | Enable / disable the IF1 stage. |
| **nFetchBufferDepth** | Int | N | Size of the fetch buffer. |

{{< caption 
  type="Table" 
  x="1"
  main="Summary of the different global parameters of the Aubrac core."
  sub=""
>}}

| **Name**       | **Type** | **Values** | **Description** |
|:---------------|:---------|:-----------|:----------------|
| **nFetchInstr** | Int | 2^N | Number of instructions simultaneously fetched. |
| **useIMemSeq** | Boolean | *true* / *false* | Enable / disable sequential access to the instruction memory (*e.g.* flush is considered only in the next cycle). |
| **useIf1Stage** | Boolean | *true* / *false* | Enable / disable the IF1 stage. |
| **nFetchBufferDepth** | Int | N | Size of the fetch buffer. |

## Chisel example

```scala
def test: Int = 10 // comment what about a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long comment ?

```