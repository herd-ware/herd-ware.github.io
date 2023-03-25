---
archetype: "chapter"
title: "Front-end"
menuTitle: "Front-end"
weight: 1
---


## Overview

The **Front-End** is the hardware part responsible for the instruction fetch.
Tightly coupled with the [NLP](/doc/hw/cores/aubrac/nlp/) to predict potential control-flow hazards, it computes each cycle the value of the program counter (PC).
Then, it directly uses it to load the corresponding instruction from the (instruction) memory.

{{< fig 
  fig="/fig/aubrac-front.png"
  alt="Table" 
  width=400px   
  x="1"
  caption="Vue globale du Front-End."
  subcaption=""
>}}

The current version of the front-end is based on five (optional) stages:
1. The PC stage computes the address of the following instruction.
2. The IF{0-2} stages perform memory accesses to load the needed instructions.
3. The IF3 stage performs pre-decoding and stores the instructions in the fetch buffer.


## PC stage
It requests the NLP to detect potential hazards, and also redirect the control-flow when asked by the [BRU](), the [HFU]() or the IF3 stage for fast *jal* redirections.

## IF{0-2} stages

## IF3 stages

## Parameters