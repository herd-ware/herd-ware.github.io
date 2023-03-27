---
archetype: "part"
title: "Abondance core"
menuTitle: "Abondance"
weight: 3
---

{{% notice style="tip" title="Name origin" %}}
<img src="/img/abondance-neige.jpg" alt="Abondance Neige" style="width: 400px; display: block; margin: 0 auto;">
 
<div style="text-align: center; font-size: 10px;"> 
  <a href="https://www.salon-agriculture.com/A-voir-sur-le-salon/La-vache-egerie/Les-anciennes-vaches-egeries/Decouvrez-Neige-l-egerie-de-l-edition-2022">Image's source.</a>
</div>

*Abondance* is a french breed of cows from the [Haute-Savoie](https://www.hautesavoie.fr/) in the south-east of France. It is mainly raised for its milk used in multiple cheeses like the [Reblochon](https://www.reblochon.fr/en/), the [Abondance](https://www.fromageabondance.fr/en) and others.
{{% /notice %}}

This page and the following ones describe the Abondance core.
It is a multiple issue out-of-order CPU with two levels of cache memories.

#### Overview

![Overview of the Abondance core.](/fig/abondance-top.png)

{{< caption 
  type="Figure" 
  x="1"
  main="Overview of the the Abondance core."
  sub="All the possible stages and units are represented, even if some of them are optional."
>}}

The Figure 1 represents the whole Abondance core.
It is composed of 10 parts.<br/>
The **Front-End** is responsible for the instruction fetch.
The **NLP** is used to predict control-flow changes.
The **Back-End** is responsible for the decoding and the execution management.
It also integrates renaming mechanisms used by multiple units for integers.
The **INT** is responsible for the execution of integer operation.
The **LSU** is responsible for the execution of integer memory operations.
The Hardware Field Unit (**HFU**) is an execution unit dedicated to field management ([CHAMP ISA](/doc/isa/champ)).
The **I/O** module is used for core's specific memory addressable mechanism (*e.g.* privileged timers).
**L1I**, **L1D** and **L2** are respectively the Level 1 Instruction, Level 1 Data and the Level 2 (Instruction and Data) private cache memories.

#### ISA support

The Abondance core is based on the RISC-V ISA.
It currently supports both 32 and 64 bits bases.

| Extension       |  Version  |   Implemented ?    |      Tested ?      |     Optional ?     | Dependencies   |
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
  main="Summary of the different supported RISC-V extensions by the Abondance core."
  sub="Some still have to be tested more in depth."
>}}

As described on the Table 1, multiple extensions are currently implemented in the Abondance.
Most of them are optional: the dedicated hardware parts are completely removed during Verilog generation.

{{% notice style="warning" %}}
If both 32 and 64 bits are implemented, only 32 bits version is currently used and tested.
More work is needed to verify 64 bit specific instructions, like ones dedicated to word-size datas.
{{% /notice %}}

#### Table of contents

{{% children sort="weight" depth=2 %}}