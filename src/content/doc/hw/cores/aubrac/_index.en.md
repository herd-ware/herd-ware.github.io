---
archetype: "part"
title: "Aubrac core"
menuTitle: "Aubrac"
weight: 1
---

{{% notice style="tip" title="Name origin" %}}
<img src="/img/aubrac-haute.jpg" alt="Aubrac Haute" style="width: 400px; display: block; margin: 0 auto;">
 
<div style="text-align: center; font-size: 10px;"> 
  <a href="https://www.salon-agriculture.com/A-voir-sur-le-salon/La-vache-egerie/Les-anciennes-vaches-egeries/Decouvrez-Haute-l-egerie-de-l-edition-2018">Image's source.</a>
</div>

*Aubrac* is a french breed of cows from the [Plateau de l'Aubrac](https://www.parc-naturel-aubrac.fr/) in the south-central of France. It is mainly raised for its meat, but also for its milk which can be used for the [Laguiole cheese](https://www.fromage-laguiole.fr/index_en.php).
{{% /notice %}}

This page and the following ones describe the Aubrac core.
It is single issue in-order CPU build around a classic pipeline and two levels of cache memories.
Based on the RISC-V ISA, it is developed in Chisel3 and has a lot of different parameters (the data size, the number of stages, the supported extensions *etc*).

#### Overview

![Overview of the Aubrac core.](/fig/aubrac-top.png)

{{< caption 
  type="Figure" 
  x="1"
  main="Overview of the the Aubrac core."
  sub="All the possible stages are represented, even if some of them are optional."
>}}

The Figure 1 represents the whole Aubrac core.
It is composed of 8 parts.<br/>
The **Front-End** is responsible of the instruction fetch.
The **NLP** is used to predict control-flow changes.
The **Back-End** is responsible of the decoding and the execution of the instructions.
The Dome Management Unit (**DMU**) is an execution unit dedicated to dome management ([CEPS ISA](/doc/isa/ceps)).
The **I/O** module is used for core's specific memory addressable mechanism (*e.g.* privileged timers).
**L1I**, **L1D** and **L2** are respectively the Level 1 Instruction, Level 1 Data and the Level 2 (Instruction and Data) private cache memories.



#### ISA support

The Aubrac core is based on the RISC-V ISA.
It currently supports both 32 and 64 bits bases.

| Extension       |  Version  |   Implemented ?    |      Tested ?      |     Optional ?     | Depends on ... |
|:----------------|:----------|:-------------------|:-------------------|:-------------------|:---------------|
| **M**           | 2.0       | {{% icon check %}} | {{% icon check %}} | {{% icon check %}} |                |
| **A**           | 2.1       | {{% icon check %}} | {{% icon check %}} | {{% icon check %}} |                |
| **B**           | 1.0.0     | {{% icon check %}} | {{% icon xmark %}} | {{% icon check %}} |                |
| **Zicsr**       |           | {{% icon check %}} | {{% icon xmark %}} | {{% icon xmark %}} |                |
| **Zicntr**      |           | {{% icon check %}} | {{% icon xmark %}} | {{% icon xmark %}} |                |
| **Zifencei**    | 2.0       | {{% icon check %}} | {{% icon xmark %}} | {{% icon check %}} |                |

{{< caption 
  type="Table" 
  x="1"
  main="Summary of the different supported RISC-V extensions by the Aubrac core."
  sub="Some still have to be tested more in depth."
>}}

As described on the Table 1, multiple extensions are currently implemented in the Aubrac.
Most of them are optional: the dedicated hardware parts are completely removed during Verilog generation.

{{% notice style="warning" %}}
If both 32 and 64 bits are implemented, only 32 bits version is currently used and tested.
More work is needed to verify 64 bit specific instructions, like ones dedicated to word-size datas.
{{% /notice %}}

#### Table of contents

{{% children sort="weight" depth=2 %}}
